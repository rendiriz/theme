'use client';

import { Button } from '@/components/ui/button';

export function ViewDemo() {
  const handleScroll = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    const section = document.getElementById('demo');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <Button onClick={handleScroll}>View Demo</Button>;
}
