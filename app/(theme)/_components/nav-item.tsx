'use client';

import Link from 'next/link';

interface Props {
  readonly className?: string;
  readonly href: string;
  readonly label: string;
}

export function NavItem({ className, href, label }: Props) {
  const handleScroll = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();

    const href = event.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');

    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleScroll}
      className={className}
    >
      {label}
    </Link>
  );
}
