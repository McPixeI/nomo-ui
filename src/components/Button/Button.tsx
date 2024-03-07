
import { VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';
import { ReactNode } from 'react';
import { Spinner } from '../Spinner';
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


const Button = ({ variant, size, children, className, type, disabled, isLoading, onClick }: ButtonProps) => {
  return (
    <button
      className={cn(buttonStyles({ variant, size, className }))}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
    >

      <span className={`flex items-center justify-center ${isLoading ? 'invisible' : 'visible'}`}>
        {/*         {!!iconName && iconAlignment === 'left' && <NomoIcon name={iconName} className="mr-3 text-[22px]" />}*/}        
        {children}
        {/*         {!!iconName && iconAlignment === 'right' && <NomoIcon name={iconName} className="ml-3 text-[22px]" />} */}     
      </span>

      {isLoading && <Spinner size="small" className='absolute' />}


    </button>
  );
}


export default Button;