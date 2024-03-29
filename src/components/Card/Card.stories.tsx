import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';


const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: <p>Whereas recognition of the inherent dignity</p>
  },
};