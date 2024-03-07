import { cva } from 'class-variance-authority';

export const stepStyles = cva(
  [
    'w-[60px] h-[4px]',
    'bg-secondary-50',
    'rounded-full',
    'm-2'
  ],
  {
    variants: {
      status: {
        inactive: ['bg-secondary-50'],
        active: ['bg-secondary-500'],
        completed: ['bg-secondary-500']
      }
    },
    defaultVariants: {
      status: 'active'
    }
  }
);