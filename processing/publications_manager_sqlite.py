#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Publications Management Script with SQLite

This script provides a menu-based interface to:
1. Set up SQLite database
2. Parse publications from TSX file and store in database
3. Scrape publication dates from Google Scholar
4. Generate sorted TSX file
5. Run all steps in sequence
6. Exit

Each stage can be run independently or in sequence.
"""

import re
import requests
import time
import sqlite3
from bs4 import BeautifulSoup
import logging
import os

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("publications_manager.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Database file path
DB_FILE = "publications.db"  # Database file will be stored in the current working directory

# File paths
INPUT_FILE = "publication.tsx"
OUTPUT_FILE = "publication_sorted.tsx"

def connect_to_db():
    """
    Connect to SQLite database
    """
    try:
        # Connect to the database file, create it if it doesn't exist
        conn = sqlite3.connect(DB_FILE)
        # Enable foreign key constraints
        conn.execute("PRAGMA foreign_keys = ON")
        # Configure SQLite to return dictionary-like results
        conn.row_factory = sqlite3.Row
        logger.info(f"Connected to SQLite database: {DB_FILE}")
        return conn
    except Exception as e:
        logger.error(f"Error connecting to SQLite database: {e}")
        raise

def setup_database():
    """
    Set up SQLite database
    If the database file already exists, it will be deleted and recreated
    """
    print("\n=== Setting up SQLite Database ===")

    try:
        # Check if database file already exists
        if os.path.exists(DB_FILE):
            print(f"Database file already exists: {os.path.abspath(DB_FILE)}")
            print("Deleting existing database file...")
            os.remove(DB_FILE)
            print("Existing database file deleted.")

        print("Creating new database file...")

        # Connect to the database (will be created if it doesn't exist)
        conn = connect_to_db()

        with conn:
            # Create publications table
            conn.execute("""
            CREATE TABLE IF NOT EXISTS publications (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                authors TEXT NOT NULL,
                proceedings TEXT NOT NULL,
                pub_date TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
            """)

            # Create links table
            conn.execute("""
            CREATE TABLE IF NOT EXISTS links (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                publication_id INTEGER NOT NULL,
                website TEXT NOT NULL,
                url TEXT NOT NULL,
                FOREIGN KEY (publication_id) REFERENCES publications(id) ON DELETE CASCADE
            )
            """)

            # Create keys table
            conn.execute("""
            CREATE TABLE IF NOT EXISTS keys (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                publication_id INTEGER NOT NULL,
                key_name TEXT NOT NULL,
                FOREIGN KEY (publication_id) REFERENCES publications(id) ON DELETE CASCADE
            )
            """)

            # Create pis table
            conn.execute("""
            CREATE TABLE IF NOT EXISTS pis (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                publication_id INTEGER NOT NULL,
                pi_name TEXT NOT NULL,
                FOREIGN KEY (publication_id) REFERENCES publications(id) ON DELETE CASCADE
            )
            """)

            # Create trigger to update updated_at field
            conn.execute("""
            CREATE TRIGGER IF NOT EXISTS update_publications_modtime
            AFTER UPDATE ON publications
            FOR EACH ROW
            BEGIN
                UPDATE publications SET updated_at = CURRENT_TIMESTAMP WHERE id = OLD.id;
            END;
            """)

        print(f"Database file created at: {os.path.abspath(DB_FILE)}")
        print("Database tables created successfully")
        print("Database setup completed successfully")
        return True

    except Exception as e:
        print(f"Error setting up database: {e}")
        logger.error(f"Error setting up database: {e}")
        return False

def parse_publications_from_tsx(file_path):
    """
    Parse the publications array from the TypeScript file
    """
    print(f"Parsing publications from {file_path}...")

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the publications array in the file
    start_marker = "export const publications:"

    start_idx = content.find(start_marker)
    if start_idx == -1:
        raise ValueError("Could not find publications array in the file")

    # Find the opening bracket of the array
    equals_bracket = content.find("= [", start_idx)
    if equals_bracket == -1:
        raise ValueError("Could not find '= [' pattern in publications array")

    array_start = equals_bracket + 2  # Position after "= "
    if array_start == -1:
        raise ValueError("Could not find start of publications array")

    # Find the closing bracket of the array followed by a semicolon
    array_end = content.find("];", array_start)
    if array_end == -1:
        raise ValueError("Could not find end of publications array")

    # Extract the array content
    publications_text = content[array_start+1:array_end]

    # Parse the publications array
    publications = []
    skipped_entries = 0

    # Count total number of publication objects (approximate)
    total_objects = publications_text.count('{title:')
    print(f"Found approximately {total_objects} publication objects in the file")

    # Split by publication entries (each starting with '{')
    pos = 0
    entry_count = 0
    while pos < len(publications_text):
        # Find the start of a publication object
        obj_start = publications_text.find('{', pos)
        if obj_start == -1:
            break

        entry_count += 1

        # Find the matching closing brace
        brace_count = 1
        obj_end = obj_start + 1

        while brace_count > 0 and obj_end < len(publications_text):
            if publications_text[obj_end] == '{':
                brace_count += 1
            elif publications_text[obj_end] == '}':
                brace_count -= 1
            obj_end += 1

        if brace_count != 0:
            # Unmatched braces, something is wrong
            logger.warning(f"Unmatched braces in entry {entry_count}, skipping")
            skipped_entries += 1
            pos = publications_text.find('{', obj_start + 1)
            continue

        # Extract the publication object
        entry = publications_text[obj_start+1:obj_end-1]
        pub = {}

        # Debug info for problematic entries
        if entry_count % 100 == 0:
            print(f"Processing entry {entry_count}...")

        # Update position for next iteration
        pos = obj_end

        # Extract title
        title_start = entry.find('title:')
        if title_start != -1:
            # Find the first quote after "title:"
            quote_start = -1
            for i in range(title_start + 6, len(entry)):
                if entry[i] in ["'", '"']:
                    quote_start = i
                    quote_char = entry[i]
                    break

            if quote_start != -1:
                # Find the matching closing quote
                quote_end = -1
                i = quote_start + 1
                while i < len(entry):
                    if entry[i] == quote_char and entry[i-1] != '\\':  # Not escaped quote
                        # Check if this is the end of the title (followed by comma)
                        j = i + 1
                        while j < len(entry) and entry[j].isspace():
                            j += 1
                        if j < len(entry) and entry[j] == ',':
                            quote_end = i
                            break
                    i += 1

                if quote_end != -1:
                    pub['title'] = entry[quote_start+1:quote_end]

        # Extract authors with the same robust approach
        authors_start = entry.find('authors:')
        if authors_start != -1:
            # Find the first quote after "authors:"
            quote_start = -1
            for i in range(authors_start + 8, len(entry)):
                if entry[i] in ["'", '"']:
                    quote_start = i
                    quote_char = entry[i]
                    break

            if quote_start != -1:
                # Find the matching closing quote
                quote_end = -1
                i = quote_start + 1
                while i < len(entry):
                    if entry[i] == quote_char and entry[i-1] != '\\':  # Not escaped quote
                        # Check if this is the end of the authors (followed by comma)
                        j = i + 1
                        while j < len(entry) and entry[j].isspace():
                            j += 1
                        if j < len(entry) and entry[j] == ',':
                            quote_end = i
                            break
                    i += 1

                if quote_end != -1:
                    pub['authors'] = entry[quote_start+1:quote_end]

        # Extract proceedings with the same robust approach
        proceedings_start = entry.find('proceedings:')
        if proceedings_start != -1:
            # Find the first quote after "proceedings:"
            quote_start = -1
            for i in range(proceedings_start + 12, len(entry)):
                if entry[i] in ["'", '"']:
                    quote_start = i
                    quote_char = entry[i]
                    break

            if quote_start != -1:
                # Find the matching closing quote
                quote_end = -1
                i = quote_start + 1
                while i < len(entry):
                    if entry[i] == quote_char and entry[i-1] != '\\':  # Not escaped quote
                        # Check if this is the end of the proceedings (followed by comma)
                        j = i + 1
                        while j < len(entry) and entry[j].isspace():
                            j += 1
                        if j < len(entry) and entry[j] == ',':
                            quote_end = i
                            break
                    i += 1

                if quote_end != -1:
                    pub['proceedings'] = entry[quote_start+1:quote_end]

        # Extract links
        links_match = re.search(r'links: \[(.*?)\],', entry, re.DOTALL)
        if links_match:
            links_text = links_match.group(1)
            links = []

            # Find all link objects
            link_entries = re.findall(r'\{(.*?)\},?', links_text, re.DOTALL)

            for link_entry in link_entries:
                link = {}

                # Extract website
                website_match = re.search(r'website: [\'"](.+?)[\'"],', link_entry)
                if website_match:
                    link['website'] = website_match.group(1)

                # Extract URL
                url_match = re.search(r'url: [\'"](.+?)[\'"],?', link_entry)
                if url_match:
                    link['url'] = url_match.group(1)

                if link:
                    links.append(link)

            pub['links'] = links

        # Extract keys
        keys_match = re.search(r'keys: \[(.*?)\],', entry, re.DOTALL)
        if keys_match:
            keys_text = keys_match.group(1)
            keys = re.findall(r'[\'"](.+?)[\'"]', keys_text)
            pub['keys'] = keys

        # Extract PIs
        pis_match = re.search(r'pis: \[(.*?)\],', entry, re.DOTALL)
        if pis_match:
            pis_text = pis_match.group(1)
            pis = re.findall(r'[\'"](.+?)[\'"]', pis_text)
            pub['pis'] = pis

        # Check if we have all required fields
        required_fields = ['title', 'authors', 'proceedings']
        missing_fields = [field for field in required_fields if field not in pub or not pub[field]]

        if missing_fields:
            logger.warning(f"Entry {entry_count} is missing required fields: {', '.join(missing_fields)}")
            skipped_entries += 1
            continue

        # Add the publication to our list
        publications.append(pub)

    # Final report
    print(f"Parsed {len(publications)} publications successfully")
    if skipped_entries > 0:
        print(f"⚠️ Warning: Skipped {skipped_entries} entries due to parsing issues")

    if entry_count != len(publications):
        print(f"⚠️ Note: Found {entry_count} entries but only {len(publications)} were successfully parsed")

    # Check if we found all the publications we expected
    if total_objects > len(publications):
        print(f"⚠️ Warning: Expected approximately {total_objects} publications but only parsed {len(publications)}")

    return publications

def get_publication_date(url):
    """
    Scrape the publication date from a Google Scholar page
    """
    # Replace zh-CN with en-US in the URL to better locate the Publication date field
    url = url.replace("&hl=zh-CN", "&hl=en-US")

    max_retries = 5
    retry_count = 0

    while retry_count < max_retries:
        try:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
            response = requests.get(url, headers=headers)
            response.raise_for_status()

            soup = BeautifulSoup(response.text, 'html.parser')

            # Look for the publication date in the page
            # The date is typically in a div with class "gsc_oci_value"
            date_elements = soup.select('.gsc_oci_field:-soup-contains("Publication date") + .gsc_oci_value')
            if date_elements:
                return date_elements[0].text.strip()

            # If not found, try alternative selectors
            date_elements = soup.select('.gsh_csp:-soup-contains("Publication date")')
            if date_elements:
                date_text = date_elements[0].text
                date_match = re.search(r'Publication date: (.*?)$', date_text)
                if date_match:
                    return date_match.group(1).strip()

            # If still not found, look for any date-like pattern
            text = soup.get_text()
            date_match = re.search(r'Publication date:?\s*([A-Za-z]+ \d{1,2},? \d{4}|\d{4}/\d{1,2}|\d{1,2}/\d{4})', text)
            if date_match:
                return date_match.group(1).strip()

            # If we get here, no date was found but no error occurred
            return None

        except requests.exceptions.HTTPError as e:
            # Check if it's a "Too Many Requests" error
            if "429" in str(e):
                retry_count += 1
                if retry_count < max_retries:
                    logger.warning(f"Error scraping date from {url}: {e}. Retrying ({retry_count}/{max_retries})...")
                    # Add a small delay before retrying
                    time.sleep(2)  # Increased delay for rate limiting
                else:
                    logger.error(f"Failed to scrape date after {max_retries} attempts: {e}")
                    # Raise a custom exception to signal rate limiting
                    raise Exception("Google Scholar rate limit reached. Try again later.") from e
            else:
                # For other HTTP errors, retry
                retry_count += 1
                if retry_count < max_retries:
                    logger.warning(f"Error scraping date from {url}: {e}. Retrying ({retry_count}/{max_retries})...")
                    time.sleep(1)
                else:
                    logger.error(f"Failed to scrape date after {max_retries} attempts: {e}")
                    # Raise exception for any HTTP error that fails after max retries
                    raise Exception(f"Failed to scrape date after {max_retries} attempts: {e}") from e

        except Exception as e:
            # For other exceptions
            retry_count += 1
            if retry_count < max_retries:
                logger.warning(f"Error scraping date from {url}: {e}. Retrying ({retry_count}/{max_retries})...")
                time.sleep(1)
            else:
                logger.error(f"Failed to scrape date after {max_retries} attempts: {e}")
                # Raise exception for any error that fails after max retries
                raise Exception(f"Failed to scrape date after {max_retries} attempts: {e}") from e

def extract_conference_info(url):
    """
    Extract conference information from a Google Scholar page
    """
    url = url.replace("&hl=zh-CN", "&hl=en-US")

    max_retries = 5
    retry_count = 0

    while retry_count < max_retries:
        try:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
            response = requests.get(url, headers=headers)
            response.raise_for_status()

            soup = BeautifulSoup(response.text, 'html.parser')

            # Look for conference information
            conf_elements = soup.select('.gsc_oci_field:-soup-contains("Conference") + .gsc_oci_value')
            if conf_elements:
                conf_text = conf_elements[0].text.strip()
                # Limit length to avoid getting entire abstracts
                if len(conf_text) > 100:
                    conf_text = conf_text[:100] + "..."
                return conf_text

            # If not found, try alternative selectors
            conf_elements = soup.select('.gsc_oci_field:-soup-contains("Journal") + .gsc_oci_value')
            if conf_elements:
                conf_text = conf_elements[0].text.strip()
                # Limit length to avoid getting entire abstracts
                if len(conf_text) > 100:
                    conf_text = conf_text[:100] + "..."
                return conf_text

            # If still not found, try to extract from the venue or publisher (but not description)
            venue_elements = soup.select('.gsc_oci_field:-soup-contains("Publisher") + .gsc_oci_value')
            if venue_elements:
                conf_text = venue_elements[0].text.strip()
                # Limit length to avoid getting entire abstracts
                if len(conf_text) > 100:
                    conf_text = conf_text[:100] + "..."
                return conf_text

            # Try to extract from the venue field if available
            venue_elements = soup.select('.gsc_oci_field:-soup-contains("Venue") + .gsc_oci_value')
            if venue_elements:
                venue_text = venue_elements[0].text.strip()
                # Limit length to avoid getting entire abstracts
                if len(venue_text) > 100:
                    venue_text = venue_text[:100] + "..."
                return venue_text

            # Try to extract from the book field if available
            book_elements = soup.select('.gsc_oci_field:-soup-contains("Book") + .gsc_oci_value')
            if book_elements:
                book_text = book_elements[0].text.strip()
                # Limit length to avoid getting entire abstracts
                if len(book_text) > 100:
                    book_text = book_text[:100] + "..."
                return book_text

            # If we get here, no conference info was found but no error occurred
            return None

        except requests.exceptions.HTTPError as e:
            # Check if it's a "Too Many Requests" error
            if "429" in str(e):
                retry_count += 1
                if retry_count < max_retries:
                    logger.warning(f"Error extracting conference info from {url}: {e}. Retrying ({retry_count}/{max_retries})...")
                    # Add a small delay before retrying
                    time.sleep(2)  # Increased delay for rate limiting
                else:
                    logger.error(f"Failed to extract conference info after {max_retries} attempts: {e}")
                    # Raise a custom exception to signal rate limiting
                    raise Exception("Google Scholar rate limit reached. Try again later.") from e
            else:
                # For other HTTP errors, retry
                retry_count += 1
                if retry_count < max_retries:
                    logger.warning(f"Error extracting conference info from {url}: {e}. Retrying ({retry_count}/{max_retries})...")
                    time.sleep(1)
                else:
                    logger.error(f"Failed to extract conference info after {max_retries} attempts: {e}")
                    # Raise exception for any HTTP error that fails after max retries
                    raise Exception(f"Failed to extract conference info after {max_retries} attempts: {e}") from e

        except Exception as e:
            # For other exceptions
            retry_count += 1
            if retry_count < max_retries:
                logger.warning(f"Error extracting conference info from {url}: {e}. Retrying ({retry_count}/{max_retries})...")
                time.sleep(1)
            else:
                logger.error(f"Failed to extract conference info after {max_retries} attempts: {e}")
                # Raise exception for any error that fails after max retries
                raise Exception(f"Failed to extract conference info after {max_retries} attempts: {e}") from e

def insert_publication(conn, publication):
    """
    Insert a publication into the database
    Returns:
    - Positive integer: ID of the inserted publication (new insertion)
    - Negative integer: ID of the existing publication (already exists)
    - None: Failed to insert
    """
    try:
        # Check if publication already exists (by title)
        cursor = conn.execute(
            "SELECT id FROM publications WHERE title = ?",
            (publication['title'],)
        )
        existing = cursor.fetchone()

        if existing:
            print(f"Publication already exists (skipping): {publication['title'][:50]}...")
            logger.info(f"Publication already exists: {publication['title']}")
            # Return negative ID to indicate it already exists
            return -existing[0]

        # Validate required fields
        if not publication.get('title'):
            print(f"⚠️ Publication missing title, cannot insert")
            logger.warning("Publication missing title, cannot insert")
            return None

        if not publication.get('authors'):
            print(f"⚠️ Publication '{publication['title'][:50]}...' missing authors, cannot insert")
            logger.warning(f"Publication '{publication['title']}' missing authors, cannot insert")
            return None

        if not publication.get('proceedings'):
            print(f"⚠️ Publication '{publication['title'][:50]}...' missing proceedings, cannot insert")
            logger.warning(f"Publication '{publication['title']}' missing proceedings, cannot insert")
            return None

        # Insert publication
        cursor = conn.execute(
            """
            INSERT INTO publications (title, authors, proceedings, pub_date)
            VALUES (?, ?, ?, ?)
            """,
            (
                publication['title'],
                publication['authors'],
                publication['proceedings'],
                publication.get('_pub_date')
            )
        )
        pub_id = cursor.lastrowid

        # Insert links
        if 'links' in publication:
            for link in publication['links']:
                if 'website' not in link or 'url' not in link:
                    print(f"⚠️ Publication '{publication['title'][:50]}...' has link with missing website or URL, skipping link")
                    continue

                conn.execute(
                    """
                    INSERT INTO links (publication_id, website, url)
                    VALUES (?, ?, ?)
                    """,
                    (pub_id, link['website'], link['url'])
                )

        # Insert keys
        if 'keys' in publication:
            for key in publication['keys']:
                conn.execute(
                    """
                    INSERT INTO keys (publication_id, key_name)
                    VALUES (?, ?)
                    """,
                    (pub_id, key)
                )

        # Insert PIs
        if 'pis' in publication:
            for pi in publication['pis']:
                conn.execute(
                    """
                    INSERT INTO pis (publication_id, pi_name)
                    VALUES (?, ?)
                    """,
                    (pub_id, pi)
                )

        conn.commit()
        return pub_id

    except sqlite3.IntegrityError as e:
        print(f"⚠️ Database integrity error when inserting '{publication['title'][:50]}...': {e}")
        logger.error(f"Database integrity error when inserting '{publication['title']}': {e}")
        return None

    except Exception as e:
        print(f"⚠️ Error inserting publication '{publication['title'][:50]}...': {e}")
        logger.error(f"Error inserting publication '{publication['title']}': {e}")
        return None

def update_publication_date(conn, pub_id, pub_date):
    """
    Update the publication date for a publication
    Note: Date format conversion (YYYY/MM to YYYY/MM/1) is now handled at the source
    """
    conn.execute(
        """
        UPDATE publications
        SET pub_date = ?
        WHERE id = ?
        """,
        (pub_date, pub_id)
    )
    conn.commit()
    logger.info(f"Updated publication date for ID {pub_id}: {pub_date}")

def get_publications_without_dates(conn):
    """
    Get all publications that don't have a publication date
    Excludes publications that have been marked as processed (pub_date = "0000/0/0")
    """
    cursor = conn.execute(
        """
        SELECT id, title, authors, proceedings, pub_date
        FROM publications
        WHERE pub_date IS NULL OR (pub_date = "0000/0/0" AND 0)  -- The AND 0 ensures we never select "0000/0/0" dates
        """
    )

    pubs = []
    for row in cursor:
        pub = dict(row)

        # Get links for this publication
        links_cursor = conn.execute(
            """
            SELECT website, url
            FROM links
            WHERE publication_id = ?
            """,
            (pub['id'],)
        )
        pub['links'] = [dict(link) for link in links_cursor]

        pubs.append(pub)

    return pubs

def get_all_publications(conn):
    """
    Get all publications with their related data
    """
    cursor = conn.execute(
        """
        SELECT id, title, authors, proceedings, pub_date
        FROM publications
        ORDER BY
            CASE
                WHEN pub_date IS NULL THEN 2
                WHEN pub_date = "0000/0/0" THEN 3  -- Special marker for "date not found"
                ELSE 0
            END,
            pub_date ASC,  -- Changed from DESC to ASC to sort from old to new
            id ASC         -- Changed from DESC to ASC to maintain consistent ordering
        """
    )

    pubs = []
    for row in cursor:
        pub = dict(row)

        # Get links
        links_cursor = conn.execute(
            """
            SELECT website, url
            FROM links
            WHERE publication_id = ?
            """,
            (pub['id'],)
        )
        pub['links'] = [dict(link) for link in links_cursor]

        # Get keys
        keys_cursor = conn.execute(
            """
            SELECT key_name
            FROM keys
            WHERE publication_id = ?
            """,
            (pub['id'],)
        )
        pub['keys'] = [row['key_name'] for row in keys_cursor]

        # Get PIs
        pis_cursor = conn.execute(
            """
            SELECT pi_name
            FROM pis
            WHERE publication_id = ?
            """,
            (pub['id'],)
        )
        pub['pis'] = [row['pi_name'] for row in pis_cursor]

        # Remove pub_date before adding to the list (we only use it for sorting)
        if 'pub_date' in pub:
            del pub['pub_date']

        pubs.append(pub)

    return pubs

def generate_tsx_file(publications, output_file):
    """
    Generate a TypeScript file with the publications array
    """
    print(f"\n=== Generating TypeScript file: {output_file} ===")

    # Read the original file to get the header (everything before the publications array)
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the start of the publications array
    start_marker = "export const publications:"
    start_idx = content.find(start_marker)
    if start_idx == -1:
        raise ValueError("Could not find publications array in the file")

    # Get the header (everything before the publications array)
    header = content[:start_idx]

    # Generate the publications array
    tsx_content = header + "export const publications: {\n"
    tsx_content += "  title: string;\n"
    tsx_content += "  authors: string;\n"
    tsx_content += "  proceedings: string;\n"
    tsx_content += "  links: { website: string; url: string }[];\n"
    tsx_content += "  keys: string[];\n"
    tsx_content += "  pis: string[];\n"
    tsx_content += "}[] = [\n"

    for pub in publications:
        tsx_content += "  {\n"

        # Title
        title = pub['title'].replace("'", "\\'")
        tsx_content += f"    title: '{title}',\n"

        # Authors
        authors = pub['authors'].replace("'", "\\'")
        tsx_content += f"    authors: '{authors}',\n"

        # Proceedings
        proceedings = pub['proceedings'].replace("'", "\\'")
        tsx_content += f"    proceedings: '{proceedings}',\n"

        # Links
        tsx_content += "    links: [\n"
        for link in pub['links']:
            tsx_content += "      {\n"
            tsx_content += f"        website: '{link['website']}',\n"
            tsx_content += f"        url: '{link['url']}',\n"
            tsx_content += "      },\n"
        tsx_content += "    ],\n"

        # Keys
        tsx_content += "    keys: [\n"
        for key in pub['keys']:
            tsx_content += f"      '{key}',\n"
        tsx_content += "    ],\n"

        # PIs
        tsx_content += "    pis: [\n"
        for pi in pub['pis']:
            tsx_content += f"      '{pi}',\n"
        tsx_content += "    ],\n"

        tsx_content += "  },\n"

    tsx_content += "];\n"

    # Write the file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(tsx_content)

    print(f"Generated TypeScript file with {len(publications)} publications: {output_file}")
    return True

def check_missing_publications(publications, conn):
    """
    Check which publications from the TSX file are missing in the database
    """
    missing_pubs = []

    for pub in publications:
        # Check if publication exists in database
        cursor = conn.execute(
            "SELECT id FROM publications WHERE title = ?",
            (pub['title'],)
        )
        existing = cursor.fetchone()

        if not existing:
            missing_pubs.append(pub)

    return missing_pubs

def parse_and_store_publications():
    """
    Parse publications from TSX file and store in database
    """
    print(f"\n=== Parsing and storing publications from {INPUT_FILE} ===")

    try:
        # Connect to the database
        conn = connect_to_db()

        # Parse publications from TSX file
        publications = parse_publications_from_tsx(INPUT_FILE)
        print(f"Found {len(publications)} publications in {INPUT_FILE}")

        # Insert publications into the database
        inserted_count = 0
        already_exists_count = 0
        failed_count = 0

        print("\n=== Inserting publications into database ===")
        for i, pub in enumerate(publications):
            if i % 100 == 0 and i > 0:
                print(f"Processed {i}/{len(publications)} publications...")

            result = insert_publication(conn, pub)
            if result is None:
                failed_count += 1
                print(f"⚠️ Failed to insert: {pub['title'][:50]}...")
            elif result > 0:
                inserted_count += 1
            elif result < 0:
                already_exists_count += 1

        print(f"\n=== Insertion statistics ===")
        print(f"Total publications in TSX file: {len(publications)}")
        print(f"Successfully inserted: {inserted_count}")
        print(f"Already existed in database: {already_exists_count}")
        print(f"Failed to insert: {failed_count}")

        # Check for missing publications
        missing_pubs = check_missing_publications(publications, conn)
        if missing_pubs:
            print(f"\n⚠️ Warning: {len(missing_pubs)} publications from {INPUT_FILE} are missing in the database")
            print("First 5 missing publications:")
            for i, pub in enumerate(missing_pubs[:5]):
                print(f"{i+1}. {pub['title'][:100]}...")
                print(f"   Authors: {pub['authors'][:100]}...")
                print(f"   Proceedings: {pub['proceedings'][:100]}...")
                print()

            # Check for potential issues in the missing publications
            title_missing = 0
            authors_missing = 0
            proceedings_missing = 0

            for pub in missing_pubs:
                if 'title' not in pub or not pub['title']:
                    title_missing += 1
                if 'authors' not in pub or not pub['authors']:
                    authors_missing += 1
                if 'proceedings' not in pub or not pub['proceedings']:
                    proceedings_missing += 1

            if title_missing > 0:
                print(f"⚠️ Found {title_missing} publications with missing title")
            if authors_missing > 0:
                print(f"⚠️ Found {authors_missing} publications with missing authors")
            if proceedings_missing > 0:
                print(f"⚠️ Found {proceedings_missing} publications with missing proceedings")

        # Check for duplicate titles in the database
        cursor = conn.execute(
            """
            SELECT title, COUNT(*) as count
            FROM publications
            GROUP BY title
            HAVING COUNT(*) > 1
            """
        )

        duplicates = cursor.fetchall()
        if duplicates:
            print("\n⚠️ Warning: Found duplicate titles in the database:")
            for dup in duplicates:
                print(f"  - '{dup['title'][:50]}...' appears {dup['count']} times")

        # Check for publications with special characters or extremely long titles
        cursor = conn.execute(
            """
            SELECT id, title
            FROM publications
            WHERE length(title) > 500
            LIMIT 5
            """
        )

        long_titles = cursor.fetchall()
        if long_titles:
            print("\n⚠️ Warning: Found publications with extremely long titles:")
            for row in long_titles:
                print(f"  - ID {row['id']}: '{row['title'][:50]}...' (length: {len(row['title'])})")

        # Display the first 10 publications from the database
        print("\n=== First 10 publications in database ===")
        cursor = conn.execute(
            """
            SELECT id, title, authors, proceedings
            FROM publications
            LIMIT 10
            """
        )

        rows = cursor.fetchall()
        if rows:
            for row in rows:
                print(f"ID: {row['id']}")
                print(f"Title: {row['title'][:100]}...")
                print(f"Authors: {row['authors'][:100]}...")
                print(f"Proceedings: {row['proceedings'][:100]}...")
                print("-" * 50)

            total_count = conn.execute("SELECT COUNT(*) FROM publications").fetchone()[0]
            print(f"\nTotal publications in database: {total_count}")

            if total_count < len(publications):
                print(f"⚠️ Warning: {len(publications) - total_count} publications were not inserted into the database")
                print(f"  - Already existed: {already_exists_count}")
                print(f"  - Failed to insert: {failed_count}")
                print(f"  - Discrepancy: {len(publications) - total_count - already_exists_count - failed_count}")
        else:
            print("No publications found in database.")

        conn.close()
        print("\nPublications successfully stored in database")
        return True

    except Exception as e:
        print(f"Error parsing and storing publications: {e}")
        logger.error(f"Error parsing and storing publications: {e}")
        return False

def scrape_publication_dates():
    """
    Scrape publication dates from Google Scholar
    """
    print("\n=== Scraping publication dates from Google Scholar ===")

    try:
        # Connect to the database
        conn = connect_to_db()

        need_rules = set()

        # Get publications without dates
        pubs_to_process = get_publications_without_dates(conn)

        if not pubs_to_process:
            print("No publications need date scraping. All done!")
            conn.close()
            return True

        print(f"Found {len(pubs_to_process)} publications that need dates")

        try:
            for i, pub in enumerate(pubs_to_process):
                for link in pub['links']:
                    if 'url' in link and 'scholar.google' in link['url']:
                        print(f"Processing publication {i+1}/{len(pubs_to_process)}: {pub['title']}")
                        date = get_publication_date(link['url'])

                        if date:
                            # Store original date for conference info extraction
                            original_date = date

                            # Check if the date has only year and month, convert it immediately
                            if date.count('/') == 1 and re.match(r'^\d{4}/\d{1,2}$', date):
                                date = f"{date}/1"
                                print(f"  Found date: {original_date} (converted to {date})")
                            # Check if the date is only a year (YYYY), convert it to YYYY/1/1
                            elif re.match(r'^\d{4}$', date.strip()):
                                date = f"{date}/1/1"
                                print(f"  Found date: {original_date} (converted to {date})")
                            else:
                                print(f"  Found date: {date}")

                            # Update the date in the database (already converted if needed)
                            conn.execute(
                                """
                                UPDATE publications
                                SET pub_date = ?
                                WHERE id = ?
                                """,
                                (date, pub['id'])
                            )
                            conn.commit()
                            logger.info(f"Updated publication date for ID {pub['id']}: {date}")

                            # If date only contains a year (no '/' symbol), extract conference info
                            if '/' not in original_date and re.match(r'^\d{4}$', original_date.strip()):
                                conf_info = extract_conference_info(link['url'])
                                if conf_info:
                                    # Check if this is an arXiv paper
                                    if conf_info.startswith('arXiv'):
                                        # Try to extract arXiv ID and parse date from it
                                        arxiv_match = re.search(r'arXiv:(\d{4})\.', conf_info)
                                        if arxiv_match:
                                            arxiv_date = arxiv_match.group(1)
                                            # First two digits are year (assuming 20xx), last two are month
                                            if len(arxiv_date) == 4 and arxiv_date.isdigit():
                                                year = f"20{arxiv_date[:2]}"
                                                month = arxiv_date[2:]
                                                # Remove leading zero from month if present
                                                month = month.lstrip('0')
                                                if not month:  # In case month was '00'
                                                    month = '1'

                                                # Create a new date in YYYY/MM/1 format
                                                new_date = f"{year}/{month}/1"
                                                print(f"  Extracted date from arXiv ID: {arxiv_date} -> {new_date}")

                                                # Update the date in the database
                                                conn.execute(
                                                    """
                                                    UPDATE publications
                                                    SET pub_date = ?
                                                    WHERE id = ?
                                                    """,
                                                    (new_date, pub['id'])
                                                )
                                                conn.commit()
                                                logger.info(f"Updated publication date for ID {pub['id']} from arXiv ID: {new_date}")

                                                # Still add to need_rules for reference
                                                need_rules.add(f"{conf_info} -> {new_date}")
                                            else:
                                                need_rules.add(conf_info)
                                                print(f"  Added conference to need_rules: {conf_info}")
                                        else:
                                            need_rules.add(conf_info)
                                            print(f"  Added conference to need_rules: {conf_info}")
                                    else:
                                        need_rules.add(conf_info)
                                        print(f"  Added conference to need_rules: {conf_info}")
                        else:
                            # No date found in Google Scholar page
                            print(f"  No date found in Google Scholar page")

                            # Try to extract conference info anyway
                            conf_info = extract_conference_info(link['url'])
                            if conf_info:
                                need_rules.add(conf_info)
                                print(f"  Added conference to need_rules: {conf_info}")

                                # Check if this is an arXiv paper
                                if conf_info.startswith('arXiv'):
                                    # Try to extract arXiv ID and parse date from it
                                    arxiv_match = re.search(r'arXiv:(\d{4})\.', conf_info)
                                    if arxiv_match:
                                        arxiv_date = arxiv_match.group(1)
                                        # First two digits are year (assuming 20xx), last two are month
                                        if len(arxiv_date) == 4 and arxiv_date.isdigit():
                                            year = f"20{arxiv_date[:2]}"
                                            month = arxiv_date[2:]
                                            # Remove leading zero from month if present
                                            month = month.lstrip('0')
                                            if not month:  # In case month was '00'
                                                month = '1'

                                            # Create a new date in YYYY/MM/1 format
                                            new_date = f"{year}/{month}/1"
                                            print(f"  Extracted date from arXiv ID: {arxiv_date} -> {new_date}")

                                            # Update the date in the database
                                            conn.execute(
                                                """
                                                UPDATE publications
                                                SET pub_date = ?
                                                WHERE id = ?
                                                """,
                                                (new_date, pub['id'])
                                            )
                                            conn.commit()
                                            logger.info(f"Updated publication date for ID {pub['id']} from arXiv ID: {new_date}")

                                            # Still add to need_rules for reference
                                            need_rules.add(f"{conf_info} -> {new_date}")

                            # Mark as processed by setting a special date value
                            # Use "0000/0/0" as a marker for "date not found"
                            conn.execute(
                                """
                                UPDATE publications
                                SET pub_date = ?
                                WHERE id = ?
                                """,
                                ("0000/0/0", pub['id'])
                            )
                            conn.commit()
                            logger.info(f"Marked publication ID {pub['id']} as processed (no date found)")
                        break
        except Exception as e:
            print(f"\nScraping interrupted: {e}")
            print("Progress has been saved in the database.")

        # Save conferences to need_rules.txt (append mode)
        if need_rules:
            # First, read existing entries to avoid duplicates
            existing_rules = set()
            try:
                if os.path.exists('need_rules.txt'):
                    with open('need_rules.txt', 'r', encoding='utf-8') as f:
                        existing_rules = set(line.strip() for line in f if line.strip())
                    print(f"Found {len(existing_rules)} existing entries in need_rules.txt")
            except Exception as e:
                print(f"Warning: Could not read existing need_rules.txt: {e}")

            # Combine new rules with existing rules
            combined_rules = existing_rules.union(need_rules)
            new_rules_count = len(combined_rules) - len(existing_rules)

            # Write all rules back to the file
            with open('need_rules.txt', 'w', encoding='utf-8') as f:
                for conf in sorted(combined_rules):
                    f.write(f"{conf}\n")

            if new_rules_count > 0:
                print(f"Added {new_rules_count} new conference entries to need_rules.txt (total: {len(combined_rules)})")
            else:
                print(f"No new conference entries to add (total: {len(combined_rules)})")

        conn.close()
        print("Publication dates scraping completed")
        return True

    except Exception as e:
        print(f"Error scraping publication dates: {e}")
        logger.error(f"Error scraping publication dates: {e}")
        return False

def generate_sorted_tsx():
    """
    Generate sorted TSX file
    """
    print(f"\n=== Generating sorted TSX file: {OUTPUT_FILE} ===")

    try:
        # Connect to the database
        conn = connect_to_db()

        # Automatically fix any date formats before sorting (silently)
        fix_date_formats(conn, quiet=True)

        # Get all publications from the database (sorted by date)
        sorted_pubs = get_all_publications(conn)

        # Generate the sorted TSX file
        result = generate_tsx_file(sorted_pubs, OUTPUT_FILE)

        conn.close()
        return result

    except Exception as e:
        print(f"Error generating sorted TSX file: {e}")
        logger.error(f"Error generating sorted TSX file: {e}")
        return False

def fix_date_formats(conn=None, quiet=False):
    """
    Check the database for dates with only year and month (YYYY/MM) and convert them to YYYY/MM/1
    This is a safety function to ensure all dates are in the correct format, even if they were
    added manually or imported from other sources.

    Args:
        conn: Optional database connection. If None, a new connection will be created.
        quiet: If True, suppress output messages (for automatic fixing).
    """
    if not quiet:
        print("\n=== Checking and fixing date formats in database ===")

    try:
        # Create a connection if one wasn't provided
        close_conn = False
        if conn is None:
            conn = connect_to_db()
            close_conn = True

        # Get all publications with dates
        cursor = conn.execute(
            """
            SELECT id, title, pub_date
            FROM publications
            WHERE pub_date IS NOT NULL
            """
        )

        fixed_count = 0
        for row in cursor:
            pub_id = row['id']
            title = row['title']
            date = row['pub_date']

            # Check if the date has only one "/" (year/month format)
            if date and date.count('/') == 1 and re.match(r'^\d{4}/\d{1,2}$', date):
                # Convert to year/month/1 format
                new_date = f"{date}/1"
                conn.execute(
                    """
                    UPDATE publications
                    SET pub_date = ?
                    WHERE id = ?
                    """,
                    (new_date, pub_id)
                )
                if not quiet:
                    print(f"Fixed date for '{title}': {date} -> {new_date}")
                fixed_count += 1
            # Check if the date is only a year (YYYY)
            elif date and date.count('/') == 0 and re.match(r'^\d{4}$', date.strip()):
                # Convert to year/1/1 format
                new_date = f"{date}/1/1"
                conn.execute(
                    """
                    UPDATE publications
                    SET pub_date = ?
                    WHERE id = ?
                    """,
                    (new_date, pub_id)
                )
                if not quiet:
                    print(f"Fixed date for '{title}': {date} -> {new_date}")
                fixed_count += 1

        if fixed_count > 0:
            conn.commit()
            if not quiet:
                print(f"Fixed {fixed_count} date(s) in the database")
        elif not quiet:
            print("All dates are already in the correct format")

        # Only close the connection if we created it
        if close_conn:
            conn.close()

        return True

    except Exception as e:
        if not quiet:
            print(f"Error fixing date formats: {e}")
        logger.error(f"Error fixing date formats: {e}")
        return False

def run_all_steps():
    """
    Run all steps in sequence
    """
    print("\n=== Running all steps in sequence ===")

    # Step 1: Set up database
    if not setup_database():
        print("Failed to set up database. Aborting.")
        return False

    # Step 2: Parse and store publications
    if not parse_and_store_publications():
        print("Failed to parse and store publications. Aborting.")
        return False

    # Step 3: Scrape publication dates
    if not scrape_publication_dates():
        print("Failed to scrape publication dates. Continuing anyway.")

    # Step 4: Fix any remaining date formats (silently, as this is automatic behavior)
    try:
        conn = connect_to_db()
        if conn:
            # Quietly fix any date formats that might need fixing
            fix_date_formats(conn, quiet=True)
            conn.close()
    except Exception as e:
        logger.error(f"Error fixing date formats: {e}")
        # Continue anyway, as this is just a precaution

    # Step 5: Generate sorted TSX file
    if not generate_sorted_tsx():
        print("Failed to generate sorted TSX file. Aborting.")
        return False

    print("\nAll steps completed successfully!")
    return True

def display_menu():
    """
    Display the main menu
    """
    print("\n" + "="*50)
    print("PUBLICATIONS MANAGEMENT SYSTEM (SQLite)")
    print("="*50)
    print("1. Set up SQLite database")
    print("2. Parse publications from TSX file and store in database")
    print("3. Scrape publication dates from Google Scholar")
    print("4. Generate sorted TSX file")
    print("5. Run all steps in sequence")
    print("6. Exit")
    print("="*50)
    print(f"Database file: {os.path.abspath(DB_FILE)}")
    print("="*50)

def main():
    """
    Main function with menu interface
    """
    while True:
        display_menu()

        # Get user choice
        choice = input("\nEnter your choice (1-6): ")

        # Process user choice
        if choice == '1':
            setup_database()
        elif choice == '2':
            parse_and_store_publications()
        elif choice == '3':
            scrape_publication_dates()
        elif choice == '4':
            generate_sorted_tsx()
        elif choice == '5':
            run_all_steps()
        elif choice == '6':
            print("\nExiting program. Goodbye!")
            break
        else:
            print("\nInvalid choice. Please enter a number between 1 and 6.")

        # Pause before showing the menu again
        user_input = input("\nPress Enter to continue, or type 'q' or 'exit' to quit: ")
        if user_input.lower() in ['q', 'exit']:
            print("\nExiting program. Goodbye!")
            break

if __name__ == "__main__":
    main()