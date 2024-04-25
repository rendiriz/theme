import { cn } from '@/lib/utils';

interface Props {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly left?: boolean;
  readonly right?: boolean;
}

export function Gutter({
  children,
  className,
  left = true,
  right = true,
}: Props) {
  return (
    <div
      className={cn(
        'container max-w-screen-2xl',
        !left && 'pl-0',
        !right && 'pr-0',
        className,
      )}
    >
      {children}
    </div>
  );
}
