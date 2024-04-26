import { SITE } from '@/config/site';
import { Gutter } from '@/components/gutter';
import { Search } from '@/components/search';

export default function Home() {
  return (
    <Gutter className="flex h-screen flex-col items-center justify-center gap-4">
      <svg
        className="h-8 w-auto fill-black dark:fill-white"
        viewBox="0 0 75 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="75"
          y="20"
          width="20"
          height="75"
          transform="rotate(90 75 20)"
        ></rect>
        <rect
          x="10"
          width="20"
          height="100"
        ></rect>
      </svg>

      <h1 className="text-5xl md:text-6xl">THEME</h1>

      <Search />

      <div className="flex gap-6">
        <a
          href={`mailto:${SITE.mail}`}
          className="text-sm underline"
          target="_blank"
        >
          Support
        </a>
        <a
          href={SITE.hire}
          className="text-sm underline"
          target="_blank"
        >
          Hire Me
        </a>
      </div>
    </Gutter>
  );
}
