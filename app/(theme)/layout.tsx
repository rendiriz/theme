import '@/styles/globals.css';

import { fontSerif, fontSans, fontMono } from '@/config/font';
import { cn } from '@/lib/utils';
import { Partytown } from '@/components/partytown';

interface Props {
  readonly children: React.ReactNode;
}

const isProd = process.env.NODE_ENV === 'production';

export default function ThemeLayout({ children }: Props) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
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
          {children}
        </div>

        {isProd && <Partytown />}
      </body>
    </html>
  );
}
