import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  ['border-2', 'uppercase', 'w-full', 'rounded-full', 'font-semibold', 'focus:outline-none', 'focus:border-secondary-500'],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-900',
          'text-white',
          'hover:bg-primary-600',
          'focus:bg-primary-900',
          'active:bg-primary-700',
          'disabled:bg-primary-300',
        ],
        secondary: [
          'bg-transparent',
          'border-primary-900',
          'text-primary-900',
          'hover:bg-primary-200',
          'hover:border-2',
          'focus:bg-primary-100',
          'active:bg-primary-300',
          'disabled:text-primary-300',
          'disabled:border-primary-300',
        ],
        tertiary: [
          'bg-transparent',
          'border-none',
          'hover:bg-primary-200',
          'active:bg-primary-300',
          'disabled:text-primary-300',
        ],
        fab: [
          'bg-primary-900',
          'text-white',
          'hover:bg-primary-600',
          'focus:bg-primary-900',
          'active:bg-primary-700',
          'disabled:bg-primary-300',
        ]
      },
      size: {
        small: 'px-m py-xs text-sm',
        medium: 'px-m py-xs text-base',
      }
    },
    /*     compoundVariants: [
      {
        variant: 'primary',
        colorscheme: 'primary',
        className: 'bg-primary hover:bg-primary-600',
      },
      {
        variant: 'secondary',
        colorscheme: 'primary',
        className:
          'text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100',
      },
      {
        variant: 'tertiary',
        colorscheme: 'primary',
        className:
          'text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100',
      },
      {
        variant: 'fab',
        colorscheme: 'primary',
        className:
          'text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100',
      },
    ], */
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);
