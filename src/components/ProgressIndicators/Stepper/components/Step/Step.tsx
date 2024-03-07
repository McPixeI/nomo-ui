import { cn } from '@/utils';
import { VariantProps } from 'class-variance-authority';
import { stepStyles } from './styles';


interface StepProps extends VariantProps<typeof stepStyles> {
  className?: string;
}

const Step = ({ status, className }: StepProps) => {
  return <div className={cn(stepStyles({ status, className }))} />;
}

export default Step;
