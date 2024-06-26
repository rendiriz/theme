import '@/styles/globals.css';
import type { Metadata } from 'next';

import { SITE } from '@/config/site';
import { fontSerif, fontSans, fontMono } from '@/config/font';
import { cn } from '@/lib/utils';
import { Partytown } from '@/components/partytown';

export const metadata: Metadata = {
  icons: {
    icon: SITE.favicon,
  },
  title: `Theme — ${SITE.title}`,
  description: SITE.description,
};

interface Props {
  readonly children: React.ReactNode;
}

const isProd = process.env.NODE_ENV === 'production';

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSerif.variable,
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <div className="relative flex min-h-screen flex-col bg-background">
          <main>{children}</main>
        </div>

        {isProd && <Partytown />}
      </body>
    </html>
  );
}
