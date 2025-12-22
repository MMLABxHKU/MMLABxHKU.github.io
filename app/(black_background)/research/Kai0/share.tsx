import Link from 'next/link';

type SharePlatform = 'X' | 'LinkedIn' | 'facebook' | 'Reddit';

type ShareLinkProps = {
  platform: SharePlatform;
  url: string;
  text?: string;
  hashtags?: string[];
  via?: string;
  className?: string;
};

export default function ShareLink({
  platform,
  url,
  text,
  hashtags = [],
  via,
  className,
}: ShareLinkProps) {
  let shareUrl = '';

  switch (platform) {
    case 'X': {
      const params = new URLSearchParams({
        text: text ?? '',
        url,
      });
      if (hashtags.length) {
        params.append('hashtags', hashtags.join(','));
      }
      if (via) {
        params.append('via', via);
      }
      shareUrl = `https://X.com/intent/tweet?${params.toString()}`;
      break;
    }

    case 'LinkedIn': {
      const params = new URLSearchParams({ url });
      shareUrl = `https://www.LinkedIn.com/sharing/share-offsite/?${params.toString()}`;
      break;
    }

    case 'facebook': {
      const params = new URLSearchParams({ u: url });
      shareUrl = `https://www.facebook.com/sharer/sharer.php?${params.toString()}`;
      break;
    }

    case 'Reddit': {
      const params = new URLSearchParams({
        url,
        title: text ?? '',
      });
      shareUrl = `https://www.Reddit.com/submit?${params.toString()}`;
      break;
    }
  }

  return (
    <Link
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        'text-mred animated-underline hover:text-mred'
      }
    >
      {platform}
    </Link>
  );
}