import { cn } from '@/utils';
import { VariantProps } from 'class-variance-authority';
import { spinnerStyles } from './styles';


type SpinnerVariants = VariantProps<typeof spinnerStyles>;

interface SpinnerProps extends SpinnerVariants {
  className?: string
}

export const Spinner = ({size, className}: SpinnerProps) => {
  return (
    <div className={cn(spinnerStyles({ size, className }))} role="status" aria-label="loading">
      <span className="sr-only">Loading...</span>
    </div>
  )
}
