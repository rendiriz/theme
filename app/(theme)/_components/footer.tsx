import { LinkedinIcon, MailIcon, HeartIcon } from 'lucide-react';

import type { Theme } from '@/types/theme';
import { SITE } from '@/config/site';
import { Gutter } from '@/components/gutter';

interface Props {
  readonly theme: Theme;
}

export function Footer({ theme }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 py-6 text-white">
      <Gutter className="flex flex-col-reverse items-center gap-6 md:flex-row md:justify-between">
        <div className="inline-flex items-center text-sm">
          © {year} {theme.title}. Made with{' '}
          <HeartIcon
            className="mx-1 h-4 w-4"
            color="red"
            fill="red"
          />
          by {SITE.title}.
        </div>

        <div className="flex space-x-4">
          <a
            href={`https://www.linkedin.com/in/${SITE.linkedin}`}
            target="_blank"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${SITE.mail}`}
            target="_blank"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </Gutter>
    </footer>
  );
}
