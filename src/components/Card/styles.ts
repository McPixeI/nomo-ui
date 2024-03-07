import { cva } from 'class-variance-authority';

export const cardStyles = cva(
  [
    'flex',
    'rounded-[4px]',
    'p-4',
    'border-[1px]',
  ],
  {
    variants: {
      variant: {
        default: ['bg-greyscale-0', 'border-greyscale-200'],
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);