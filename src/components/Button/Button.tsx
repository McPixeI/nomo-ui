
import { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';
import { ComponentProps, ReactNode } from 'react';
import { NomoIcon } from '../NomoIcon';
import { Spinner } from '../Spinner';
import { buttonStyles } from './styles';


type IconAlignment = 'left' | 'right' 

type ButtonVariants = VariantProps<typeof buttonStyles>;
 
interface ButtonProps extends ButtonVariants {
  children: ReactNode | string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
  isLoading?: boolean
  className?: string
  icon?: {name: ComponentProps<typeof NomoIcon>['name'] , alignment?: IconAlignment}
}


const Button = ({ variant, size, children, className, type, disabled, isLoading, onClick, icon }: ButtonProps) => {
  return (
    <button
      className={cn(buttonStyles({ variant, size, className }))}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      <span className={`flex gap-3 items-center justify-center ${isLoading ? 'invisible' : 'visible'} ${icon?.alignment === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
        {!!icon?.name && <NomoIcon name={icon.name} className="text-[22px]" />}       
        {children}
      </span>
      {isLoading && <Spinner size="small" className='absolute' />}
    </button>
  );
}


export default Button;