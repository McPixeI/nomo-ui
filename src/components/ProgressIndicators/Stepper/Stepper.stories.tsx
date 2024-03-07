import type { Meta, StoryObj } from '@storybook/react';
import Stepper from './Stepper';


const meta: Meta<typeof Stepper> = {
  title: 'Components/Progress-Indicators/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    stepsId: ['step1', 'step2', 'step3'],
    activeStep: 2,
    className: ''
  },
};