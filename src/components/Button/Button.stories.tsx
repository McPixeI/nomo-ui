import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';


const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary button',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary button',
    variant: 'tertiary',
  },
};

export const FAB: Story = {
  args: {
    children: '+',
    variant: 'fab',
  },
};
