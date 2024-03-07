import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';


const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    children: 'Neutral'
  },
};

export const Notice: Story = {
  args: {
    variant: 'notice',
    children: 'Notice'
  },
};

export const Positive: Story = {
  args: {
    variant: 'positive',
    children: 'Positive'
  },
};

export const Negative: Story = {
  args: {
    variant: 'negative',
    children: 'Negative'
  },
};

export const Highlight1: Story = {
  args: {
    variant: 'highlight1',
    children: 'Highlight1'
  },
};

export const Highlight2: Story = {
  args: {
    variant: 'highlight2',
    children: 'Highlight2'
  },
};

export const Highlight3: Story = {
  args: {
    variant: 'highlight3',
    children: 'Highlight3'
  },
}; 