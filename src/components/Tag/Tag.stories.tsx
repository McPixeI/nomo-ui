import type { Meta, StoryObj } from '@storybook/react';
import { NomoIcon } from '..';
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


export const Neutral: Story  ={
  render: () => (
    <div className='flex gap-6'>
      <Tag variant="neutral" >Neutral</Tag>
      <Tag variant="neutral" ><NomoIcon name='thk_info'/></Tag>
    </div>
  )
};

export const Notice: Story = {
  render: () => (
    <div className='flex gap-6'>
      <Tag variant="notice" >Neutral</Tag>
      <Tag variant="notice" ><NomoIcon name='thk_danger'/></Tag>
    </div>
  )
};

export const Positive: Story = {
  render: () => (
    <div className='flex gap-6'>
      <Tag variant="positive" >Neutral</Tag>
      <Tag variant="positive" ><NomoIcon name='thk_radio_ok_black'/></Tag>
    </div>
  )
};

export const Negative: Story = {
  render: () => (
    <div className='flex gap-6'>
      <Tag variant="negative" >Neutral</Tag>
      <Tag variant="negative" ><NomoIcon name='error'/></Tag>
    </div>
  )
};

export const Highlight1: Story = {
  render: () => (
    <div className='flex gap-6'>
      <Tag variant="highlight1" >Highlight1</Tag>
      <Tag variant="highlight1" ><NomoIcon name='thk_info'/></Tag>
    </div>
  )
};

export const Highlight2: Story = {
  render: () => (
    <div className='flex gap-6'>
      <Tag variant="highlight2" >Highlight2</Tag>
      <Tag variant="highlight2" ><NomoIcon name='thk_info'/></Tag>
    </div>
  )
};

export const Highlight3: Story = {
  render: () => (
    <div className='flex gap-6'>
      <Tag variant="highlight3" >Highlight3</Tag>
      <Tag variant="highlight3" ><NomoIcon name='thk_info'/></Tag>
    </div>
  )
}; 