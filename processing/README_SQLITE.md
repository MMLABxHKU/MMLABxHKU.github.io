# Publications Management System (SQLite Version)

这个脚本提供了一个基于菜单的界面，使用 SQLite 数据库来管理学术出版物。它允许你：

1. 设置 SQLite 数据库
2. 从 TypeScript 文件解析出版物并存储到数据库中
3. 从 Google Scholar 爬取出版日期
4. 生成按日期排序的 TypeScript 文件
5. 按顺序运行所有步骤

## 优势

使用 SQLite 作为数据库后端有以下优势：

1. **简单性**：不需要安装和配置单独的数据库服务器
2. **便携性**：整个数据库就是一个文件，可以轻松复制、移动或备份
3. **零配置**：不需要用户名、密码或端口设置
4. **自包含**：Python 标准库内置了 SQLite 支持，不需要额外安装依赖
5. **适合项目规模**：对于管理出版物这种中小规模的数据，SQLite 性能完全足够

## 先决条件

- Python 3.10+
- 必需的 Python 包：
  - beautifulsoup4
  - requests

你可以使用以下命令安装必需的包：

```bash
pip install beautifulsoup4 requests
```

注意：SQLite 是 Python 标准库的一部分，不需要单独安装。

## 配置

在运行脚本之前，你可能需要修改脚本中的文件路径：

```python
# 数据库文件路径
DB_FILE = "publications.db"  # 数据库文件将存储在当前工作目录

# 文件路径
INPUT_FILE = "publication.tsx"
OUTPUT_FILE = "publication_sorted.tsx"
```

## 使用方法

运行脚本：

```bash
python publications_manager_sqlite.py
```

这将显示一个带有以下选项的菜单：

```
==================================================
PUBLICATIONS MANAGEMENT SYSTEM (SQLite)
==================================================
1. Set up SQLite database
2. Parse publications from TSX file and store in database
3. Scrape publication dates from Google Scholar
4. Generate sorted TSX file
5. Run all steps in sequence
6. Exit
==================================================
Database file: C:\path\to\your\publications.db
==================================================
```

输入与你想执行的操作相对应的数字：

### 1. 设置 SQLite 数据库

此选项创建 SQLite 数据库文件和存储出版物数据所需的表。它将：
- 如果已存在 `publications.db` 文件，则删除它
- 创建一个全新的 `publications.db` 数据库文件
- 创建出版物、链接、关键词和 PI 的表
- 设置必要的触发器

> **注意**：选择此选项将删除现有的数据库文件及其中的所有数据。如果你想保留现有数据，请先备份数据库文件。

### 2. 从 TSX 文件解析出版物并存储到数据库中

此选项从 TypeScript 文件（`publication.tsx`）解析出版物并将其存储在数据库中。它将：
- 提取出版物信息（标题、作者、会议记录、链接、关键词、PI）
- 将数据插入到适当的数据库表中
- 显示数据库中的前10条记录，以便确认数据是否成功解析和存储
- 显示数据库中的总记录数

### 3. 从 Google Scholar 爬取出版日期

此选项从 Google Scholar 链接爬取出版日期。它将：
- 在数据库中查找没有出版日期的出版物
- 对于每个出版物，查找 Google Scholar 链接
- 从 Google Scholar 页面爬取出版日期
- 用爬取的日期更新数据库
- 如果日期只有年份和月份（YYYY/MM 格式），会自动转换为该月的第一天（YYYY/MM/1）
- 如果日期只有年份（YYYY 格式），会自动转换为该年的第一天（YYYY/1/1）
- 对于只有年份（没有月/日）的出版物，提取会议信息并保存到 `need_rules.txt`
- 对于 arXiv 预印本，会从 arXiv ID（如 "arXiv:2212.07398"）中提取年月信息（如 "2212"），并转换为标准日期格式（如 "2022/12/1"）
- 对于在 Google Scholar 页面中找不到日期的出版物，会尝试提取会议信息，并将其标记为"已处理"（使用特殊日期值 "0000/0/0"），以避免在下次运行时再次处理

### 4. 生成排序的 TSX 文件

此选项生成一个按出版日期排序的新 TypeScript 文件。它将：
- 检查并确保所有日期格式正确（如有需要，将 YYYY/MM 格式转换为 YYYY/MM/1）
- 从数据库中检索所有出版物，按日期从旧到新排序（较早发表的论文排在前面）
- 生成一个新的 TypeScript 文件（`publication_sorted.tsx`），包含排序后的出版物

> **重要**：出版日期（`pub_date`）只用于对出版物进行排序，不会被写入到生成的 TSX 文件中。这样可以确保 TSX 文件的结构与原始文件保持一致，只是顺序发生了变化。

> **注意**：日期格式转换是在爬取时自动进行的。当系统从 Google Scholar 爬取到只有年份和月份的日期（如 "2024/9"）时，会立即将其转换为该月的第一天（如 "2024/9/1"）；当爬取到只有年份的日期（如 "2024"）时，会立即将其转换为该年的第一天（如 "2024/1/1"）。对于 arXiv 预印本，系统会从 arXiv ID 中提取年月信息并转换为标准日期格式。系统还会在生成排序文件前检查数据库中的所有日期，确保格式一致，无需用户手动操作。

### 5. 按顺序运行所有步骤

此选项按顺序运行上述所有步骤，提供完整的端到端工作流程：
1. 设置数据库
2. 解析和存储出版物
3. 爬取出版日期
4. 生成排序的 TSX 文件

### 6. 退出

此选项退出程序。

> **提示**：除了使用菜单选项 6 退出外，你还可以在任何操作完成后，在看到 "Press Enter to continue, or type 'q' or 'exit' to quit:" 提示时，输入 'q' 或 'exit' 来直接退出程序。

## 数据库架构

数据库由以下表组成：

1. `publications`：存储主要的出版物信息
   - `id`：自增主键
   - `title`：出版物标题
   - `authors`：出版物作者
   - `proceedings`：出版物会议记录
   - `pub_date`：出版日期
   - `created_at`：记录创建时的时间戳
   - `updated_at`：记录最后更新时的时间戳

2. `links`：存储与出版物相关的链接
   - `id`：自增主键
   - `publication_id`：指向出版物表的外键
   - `website`：网站名称（例如，"Paper"、"GitHub"）
   - `url`：URL

3. `keys`：存储出版物的关键词
   - `id`：自增主键
   - `publication_id`：指向出版物表的外键
   - `key_name`：关键词

4. `pis`：存储出版物的主要研究者
   - `id`：自增主键
   - `publication_id`：指向出版物表的外键
   - `pi_name`：PI 名称

## 故障排除

- 检查日志文件（`publications_manager.log`）获取错误消息
- 如果爬取因速率限制而中断，脚本将保存进度，你可以稍后继续
- 数据库文件（`publications.db`）存储在当前工作目录中，可以轻松备份

## 备份数据库

由于 SQLite 数据库是一个单一文件，备份非常简单：

1. 关闭脚本（如果正在运行）
2. 复制 `publications.db` 文件到安全位置
3. 如果需要恢复，只需将备份的文件复制回原位置

## 数据库文件位置

SQLite 数据库文件存储在脚本运行的当前工作目录中。菜单界面会显示数据库文件的完整路径，方便你找到它。
