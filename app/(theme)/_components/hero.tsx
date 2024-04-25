import Image from 'next/image';

import type { Theme } from '@/types/theme';
import { Gutter } from '@/components/gutter';
import { VerticalPadding } from '@/components/vertical-padding';
import { ViewDemo } from './view-demo';

interface Props {
  readonly theme: Theme;
}

export function Hero({ theme }: Props) {
  const slogan = { __html: theme.slogan };

  return (
    <VerticalPadding
      id="home"
      className="relative h-[470px] md:h-[550px]"
      top="none"
      bottom="none"
    >
      <Image
        src={theme.hero}
        alt={`Hero ${theme.title}`}
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      <Gutter className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
        <span className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
          {theme.code}
        </span>
        <h1
          className="my-0 text-white"
          dangerouslySetInnerHTML={slogan}
        />
        <div className="py-4">
          <ViewDemo />
        </div>
      </Gutter>
    </VerticalPadding>
  );
}
