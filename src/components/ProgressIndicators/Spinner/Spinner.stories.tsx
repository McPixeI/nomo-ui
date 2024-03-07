import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '.';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Progress-Indicators/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 'large',
  },
};
