import { ComponentProps } from 'react';

import { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';
import { buttonStyles } from './styles';

/* 
// type IconAlignment = 'left' | 'right' | undefined // TODO

interface ButtonSpecificProps {
  children: ReactNode | string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
  isLoading?: boolean
  className?: string,
  //iconName?: ComponentProps<typeof NomoIcon>['name'] // TODO
  //iconAlignment?: IconAlignment // TODO
  form?: string
}
 */
type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>;


const Button = ({ children, variant, size, className }: ButtonProps) => {
  return (
    <button
      className={cn(buttonStyles({ variant, size, className }))}
    >
      {children}
    </button>
  );
}


export default Button;