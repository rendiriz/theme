'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Drawer } from 'vaul';
import { MenuIcon, XIcon } from 'lucide-react';

import type { Theme } from '@/types/theme';
import { SITE } from '@/config/site';
import { delay } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';

interface Props {
  readonly theme: Theme;
}

export function HeaderDrawer({ theme }: Props) {
  const [open, setOpen] = useState(false);

  const handleScroll = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setOpen(false);

    const href = event.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');

    const section = document.getElementById(targetId);
    if (section) {
      await delay(500);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Drawer.Root
      direction="left"
      open={open}
      onOpenChange={setOpen}
    >
      <Drawer.Trigger asChild>
        <Button
          variant="link"
          size="icon"
          className="mr-4 w-auto md:hidden"
        >
          <MenuIcon className="h-4 w-4" />
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/80" />
        <Drawer.Content className="fixed bottom-0 left-0 z-50 mt-24 flex h-full w-3/4 flex-col bg-background">
          <div className="h-full flex-1 bg-background p-4">
            <div className="mx-auto flex max-w-md flex-col space-y-6">
              <div className="flex items-center justify-between">
                <Logo
                  src={theme.logo}
                  alt={theme.title}
                />

                <Drawer.Close asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                  >
                    <XIcon className="h-4 w-4" />
                  </Button>
                </Drawer.Close>
              </div>

              <nav className="flex flex-col space-y-4">
                <Link
                  href="#home"
                  onClick={handleScroll}
                >
                  Home
                </Link>
                <Link
                  href="#demo"
                  onClick={handleScroll}
                >
                  Demo
                </Link>
                <Link
                  href="#features"
                  onClick={handleScroll}
                >
                  Features
                </Link>
                <a
                  href={SITE.hire}
                  target="_blank"
                >
                  Hire Me
                </a>
              </nav>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
