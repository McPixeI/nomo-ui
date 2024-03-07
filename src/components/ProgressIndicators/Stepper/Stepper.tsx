import { cn } from '@/utils';
import { VariantProps } from 'class-variance-authority';
import Step from './components/Step/Step';
import { stepperStyles } from './styles';


interface StepperProps  extends VariantProps<typeof stepperStyles> {
  stepsId: Array<string>;
  activeStep: number;
  className?: string;
}


const Stepper = ({ stepsId, activeStep, className}: StepperProps) => {
  return (  
    <div className={cn(stepperStyles({ className }))} >
      {stepsId.map((id, i) => {
        const stepNumber = i + 1;
        const status = stepNumber === activeStep ? 'active' : stepNumber < activeStep ? 'completed' : 'inactive';
        return <Step key={id} status={status} className={className} />;
      })}
    </div>
  )
}



export default Stepper;
