import { cva } from 'class-variance-authority';

export const tagStyles = cva(
  [
    'flex',
    'justify-center',
    'items-center',
    'rounded-[4px]',
    'p-[4px]',
    'text-sm',
    'uppercase'
  ],
  {
    variants: {
      variant: {
        neutral: ['bg-greyscale-100', 'text-greyscale-600'],
        notice: ['bg-notice-50', 'text-notice-500'],
        positive: ['bg-positive-50', 'text-positive-500'],
        negative: ['bg-negative-50', 'text-negative-500'],
        highlight1: ['bg-secondary-50', 'text-secondary-500'],
        highlight2: ['bg-secondary-500', 'text-greyscale-100'],
        highlight3: ['bg-secondary-50', 'text-secondary-500'],
      }
    },
    defaultVariants: {
      variant: 'neutral'
    }
  }
);