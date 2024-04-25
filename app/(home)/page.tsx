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
    </Gutter>
  );
}
