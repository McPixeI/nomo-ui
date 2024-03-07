
import { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';
import { ReactNode } from 'react';
import { buttonStyles } from './styles';


// type IconAlignment = 'left' | 'right' | undefined // TODO

type ButtonVariants = VariantProps<typeof buttonStyles>;
 
interface ButtonProps extends ButtonVariants {
  children: ReactNode | string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
  isLoading?: boolean
  className?: string
  //iconName?: ComponentProps<typeof NomoIcon>['name'] // TODO
  //iconAlignment?: IconAlignment // TODO
}


const Button = ({ children, variant, size, className, type, disabled, isLoading, onClick }: ButtonProps) => {
  return (
    <button
      className={cn(buttonStyles({ variant, size, className }))}
    >
      {children}
    </button>
  );
}


export default Button;