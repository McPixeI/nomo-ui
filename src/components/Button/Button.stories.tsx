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
    children: 'Primary icon left',
    variant: 'primary',
    icon: { name: 'thk_btn_open' }

  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary icon right',
    variant: 'secondary',
    icon: { name: 'map-pin', alignment: 'right'}
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
    children: <NomoIcon name="thk_btn_open" className="text-[22px]" />,
    variant: 'fab',
  },
};
