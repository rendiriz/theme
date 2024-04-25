import type { Metadata } from 'next';

import { SITE } from '@/config/site';
import { THEME, DEMO, FEATURE } from '@/data/techverve';
import { Header } from '../_components/header';
import { Footer } from '../_components/footer';
import { Hero } from '../_components/hero';
import { Demo } from '../_components/demo';
import { Feature } from '../_components/feature';

export const metadata: Metadata = {
  icons: {
    icon: THEME.icon,
  },
  title: `${THEME.title} — ${SITE.title}`,
  description: THEME.description,
};

export default function Techverve() {
  return (
    <>
      <Header theme={THEME} />
      <main>
        <Hero theme={THEME} />
        <Demo
          theme={THEME}
          demo={DEMO}
        />
        <Feature
          theme={THEME}
          feature={FEATURE}
        />
      </main>
      <Footer theme={THEME} />
    </>
  );
}
