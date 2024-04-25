import { Plus_Jakarta_Sans, Inter, Roboto_Mono } from 'next/font/google';

export const fontSerif = Plus_Jakarta_Sans({
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const fontSans = Inter({
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const fontMono = Roboto_Mono({
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
