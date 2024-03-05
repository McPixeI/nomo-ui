import { ComponentProps, forwardRef } from 'react';

import { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';
import { buttonStyles } from './styles';

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, colorscheme, className }, ref) => {

    console.log('first'); 

    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorscheme, className }))}
      >
        {children}
      </button>
    );
  }
);
