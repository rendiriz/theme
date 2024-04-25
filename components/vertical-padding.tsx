import { cn } from '@/lib/utils';

export type VerticalPaddingOptions = 'large' | 'medium' | 'none';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly top?: VerticalPaddingOptions;
  readonly bottom?: VerticalPaddingOptions;
}

export function VerticalPadding({
  children,
  className,
  top = 'medium',
  bottom = 'medium',
  ...props
}: Props) {
  return (
    <div
      className={cn(
        top === 'medium' && 'pt-16 md:pt-20 lg:pt-24 xl:pt-28',
        top === 'large' && 'pt-20 md:pt-24 lg:pt-28 xl:pt-32',
        bottom === 'medium' && 'pb-16 md:pb-20 lg:pt-24 xl:pb-28',
        bottom === 'large' && 'pb-20 md:pb-24 lg:pt-28 xl:pb-32',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
