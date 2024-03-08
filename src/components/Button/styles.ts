import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  [
    'relative', 
    'flex items-center justify-center', 
    'transition	duration-150 ease-linear',
    'border-[1px]', 
    'h-[40px]',
    'text-highlight',
    'uppercase', 
    'rounded-full', 
    'focus:outline-none', 
    'focus:border-secondary-500 focus:border-2',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-900',
          'text-white',
          'hover:bg-primary-600',
          'focus:bg-primary-900',
          'active:bg-primary-700',
          'disabled:bg-primary-300'
        ],
        secondary: [
          'bg-transparent',
          'border-primary-900',
          'text-primary-900',
          'hover:bg-primary-200',
          'focus:bg-primary-100',
          'active:bg-primary-300 disabled:border-primary-300'
        ],
        tertiary: [
          'bg-transparent',
          'border-transparent',
          'hover:bg-primary-200',
          'active:bg-primary-300',
          'disabled:text-primary-300'
        ],
        fab: [
          'bg-primary-900',
          'flex justify-center items-center',
          'w-[52px] h-[52px]',
          'py-0 px-0',
          'text-white',
          'hover:bg-primary-600',
          'focus:bg-primary-900',
          'active:bg-primary-700',
          'disabled:bg-primary-300'
        ]
      },
      size: {
        s: 'px-m py-[7px]',
        m: 'px-m py-[10px]'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'm'
    }
  }
);
