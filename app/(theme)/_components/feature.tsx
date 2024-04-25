import Image from 'next/image';

import type { Theme } from '@/types/theme';
import type { Feature } from '@/types/feature';
import { Card, CardContent } from '@/components/ui/card';
import { Gutter } from '@/components/gutter';
import { VerticalPadding } from '@/components/vertical-padding';

interface Props {
  readonly theme: Theme;
  readonly feature: Feature[];
}

export function Feature({ feature }: Props) {
  return (
    <VerticalPadding
      id="features"
      className="bg-neutral-50"
    >
      <Gutter className="flex flex-col gap-4">
        <h2 className="text-center">Template Features</h2>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {feature.map((item) => (
            <Card
              key={item.code}
              className="group"
            >
              <CardContent className="flex items-center gap-6 p-6">
                <div className="group-hover:animate-shake relative flex h-12 w-12 items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                </div>

                <h6 className="my-0">{item.title}</h6>
              </CardContent>
            </Card>
          ))}
        </div>
      </Gutter>
    </VerticalPadding>
  );
}
