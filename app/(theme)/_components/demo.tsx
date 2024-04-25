import Image from 'next/image';

import type { Theme } from '@/types/theme';
import type { Demo } from '@/types/demo';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Gutter } from '@/components/gutter';
import { VerticalPadding } from '@/components/vertical-padding';

interface Props {
  readonly theme: Theme;
  readonly demo: Demo[];
}

export function Demo({ demo }: Props) {
  return (
    <VerticalPadding id="demo">
      <Gutter className="flex flex-col gap-4">
        <h2 className="text-center">Template Demos</h2>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {demo.map((item) => (
            <a
              href={item.url}
              key={item.code}
              className="group"
              target="_blank"
            >
              <Card className="scale-100 transform transition-transform duration-300 group-hover:scale-105">
                <CardContent className="border-b p-0">
                  <div className="flex flex-col">
                    <Image
                      src={item.image}
                      alt="Demo 1"
                      sizes="100vw"
                      width={650}
                      height={800}
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      className="rounded-t-lg"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex-col p-4 group-hover:rounded-b-lg group-hover:bg-neutral-900">
                  <h6 className="my-0 text-center group-hover:text-white">
                    {item.title}
                  </h6>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
      </Gutter>
    </VerticalPadding>
  );
}
