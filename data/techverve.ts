import type { Theme } from '@/types/theme';
import type { Demo } from '@/types/demo';
import type { Feature } from '@/types/feature';

import typescript from '@/public/typescript.svg';
import nextjs from '@/public/nextjs_icon_dark.svg';
import tailwind from '@/public/tailwindcss.svg';

export const THEME: Theme = {
  code: 'techverve',
  title: 'Techverve',
  description: 'Techverve Description',
  icon: 'https://placehold.co/36x36/png',
  logo: 'https://placehold.co/125x40/png',
  hero: 'https://placehold.co/1920x1200/png',
  slogan: 'Next.js App Route <br /> Technology Template',
  buy: 'https://www.google.com',
};

export const DEMO: Demo[] = [
  {
    code: 'home',
    title: 'Home Main',
    image: 'https://placehold.co/650x800/png',
    url: 'https://www.google.com',
  },
  {
    code: 'ai-solutions',
    title: 'AI Solutions',
    image: 'https://placehold.co/650x800/png',
    url: 'https://www.google.com',
  },
  {
    code: 'cyber-security',
    title: 'Cyber Security',
    image: 'https://placehold.co/650x800/png',
    url: 'https://www.google.com',
  },
  {
    code: 'it-solutions',
    title: 'IT Solutions',
    image: 'https://placehold.co/650x800/png',
    url: 'https://www.google.com',
  },
];

export const FEATURE: Feature[] = [
  {
    code: 'typescript',
    title: 'TypeScript',
    image: typescript,
  },
  {
    code: 'next',
    title: 'Next.js App Route',
    image: nextjs,
  },
  {
    code: 'tailwind',
    title: 'Tailwind CSS',
    image: tailwind,
  },
];
