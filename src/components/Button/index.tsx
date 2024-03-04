import { VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';
import { cn } from 'src/utils';
import { buttonStyles } from './styles';

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, colorscheme, className }, ref) => {
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
