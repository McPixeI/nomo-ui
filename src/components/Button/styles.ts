import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  ['w-full', 'rounded-md', 'font-semibold', 'focus:outline-none'],
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border-2',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
      colorscheme: {
        primary: 'text-white',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        colorscheme: 'primary',
        className: 'bg-primary-500 hover:bg-primary-600',
      },
      {
        variant: 'outline',
        colorscheme: 'primary',
        className:
          'text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      colorscheme: 'primary',
    },
  }
);