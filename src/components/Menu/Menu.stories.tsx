import Tag from '@components/Tag/Tag';
import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '.';
import { Container } from './components/Container';


const meta: Meta<typeof Container> = {
  title: 'Components/Menu',
  component: Menu.Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;


export const Neutral: Story  ={
  render: () => (
    <Menu.Container>
      <Menu.MenuButton as={Tag}>
        asdfasf
      </Menu.MenuButton>
      <Menu.Content>
        <Menu.ScrollContent>
          <Menu.Item
            //selected={selectedValue === value}
            onClick={e => {
              e.stopPropagation()
              //onSelectHandler(value)
            }}
          >
            <span className='truncate text-left w-56'>asfasdf</span>
          </Menu.Item>
        </Menu.ScrollContent>
      </Menu.Content>
    </Menu.Container>
  )
};