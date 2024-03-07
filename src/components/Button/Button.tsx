
import { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';
import { ComponentProps, ReactNode } from 'react';
import { NomoIcon } from '../NomoIcon';
import { Spinner } from '../Spinner';
import { buttonStyles } from './styles';


type ButtonVariants = VariantProps<typeof buttonStyles>;
 
interface ButtonProps extends ButtonVariants {
  children: ReactNode | string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
  isLoading?: boolean
  className?: string
  iconLeft?: ComponentProps<typeof NomoIcon>['name'],
  iconRight?: ComponentProps<typeof NomoIcon>['name']
}


const Button = ({ variant, size, children, className, type='button', disabled, isLoading, onClick, iconLeft, iconRight }: ButtonProps) => {
  return (
    <button
      className={cn(buttonStyles({ variant, size, className }))}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      aria-label={typeof children === 'string' ? children : type} //NOTE: For a11y
    >
      <span className={`flex gap-3 items-center justify-center ${isLoading ? 'invisible' : 'visible'} `}>
        {!!iconLeft && <NomoIcon name={iconLeft} className="text-[22px]" />}       
        {children}
        {!!iconRight && <NomoIcon name={iconRight} className="text-[22px]" />}       
      </span>
      {isLoading && <Spinner size="small" className='absolute' />}
    </button>
  );
}


export default Button;