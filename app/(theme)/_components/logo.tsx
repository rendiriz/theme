'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Props {
  readonly src?: string;
  readonly height?: number;
  readonly width?: number;
  readonly alt?: string;
}

export function Logo({
  src = 'https://placehold.co/125x40/png',
  height = 40,
  width = 125,
  alt = 'Logo',
}: Props) {
  const handleScroll = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();

    const section = document.getElementById('home');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link
      href="#home"
      onClick={handleScroll}
    >
      <Image
        src={src}
        height={height}
        width={width}
        alt={alt}
      />
    </Link>
  );
}
