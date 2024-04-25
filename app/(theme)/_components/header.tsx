'use client';

import { useEffect, useState } from 'react';

import type { Theme } from '@/types/theme';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Gutter } from '@/components/gutter';
import { Logo } from './logo';
import { HeaderDrawer } from './header-drawer';
import { NavItem } from './nav-item';

interface Props {
  readonly theme: Theme;
}

const NAVIGATION = [
  {
    href: '#home',
    label: 'Home',
  },
  {
    href: '#demo',
    label: 'Demo',
  },
  {
    href: '#features',
    label: 'Features',
  },
  {
    href: '#hireMe',
    label: 'Hire Me',
  },
];

export function Header({ theme }: Props) {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        isTop
          ? 'absolute bg-none'
          : 'animate-sticky fixed border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        'top-0 z-50 w-full',
      )}
    >
      <Gutter className="flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center">
          <HeaderDrawer theme={theme} />

          <Logo
            src={theme.logo}
            alt={theme.title}
          />
        </div>

        <nav className="flex items-center space-x-8">
          {NAVIGATION.map(({ href, label }) => (
            <NavItem
              key={href}
              href={href}
              label={label}
              className={cn(
                isTop ? 'text-white' : 'text-body',
                'hidden font-medium md:block',
              )}
            />
          ))}
          <Button asChild>
            <a
              href={theme.buy}
              target="_blank"
            >
              Buy Now
            </a>
          </Button>
        </nav>
      </Gutter>
    </header>
  );
}
