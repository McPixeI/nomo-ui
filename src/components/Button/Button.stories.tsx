import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import { NomoIcon } from '../NomoIcon';


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
    children: 'Primary',
    variant: 'primary',
    className: ''
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
    className: ''

  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
    className: ''
  },
};

export const FAB: Story = {
  args: {
    children: <NomoIcon name="thk_btn_open" className="text-[22px]" />,
    variant: 'fab',
    className: ''
  },
};
