import { cn } from 'src/lib/utils';

interface ITypography {
  children: React.ReactNode;
  className?: string;
  variant?: 'title' | 'heading' | 'subheading' | 'xl' | 'lg' | 'p';
}

export const Typography = ({
  variant = 'p',
  className,
  children,
}: ITypography) => (
  <span
    className={cn(
      'text-primaryBlack',
      {
        'text-4xl !leading-tight md:text-5xl xl:text-6xl': variant === 'title',
        'text-2xl font-bold leading-[44px] md:text-[32px]':
          variant === 'heading',
        'text-base md:text-lg font-semibold': variant === 'subheading',
        'text-sm md:text-base font-normal leading-[27px]': variant === 'p',
      },
      className,
    )}
  >
    {children}
  </span>
);
