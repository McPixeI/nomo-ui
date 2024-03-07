import { cva } from 'class-variance-authority';

export const spinnerStyles = cva(
  ['animate-spin', 
    'inline-block', 
    'size-6', 
    'border-current', 
    'border-t-transparent', 
    'text-inherit', 
    'rounded-full'
  ], {
    variants: {
      size: {
        small: 'size-[18px] border-[2px]',
        medium: 'size-[24px] border-[3px]',
        large: 'size-[48px] border-[4px]'
      }
    },
    defaultVariants: {
      size: 'small'
    },
  }
);
