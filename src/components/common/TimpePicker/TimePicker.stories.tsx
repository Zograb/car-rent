import type { Meta, StoryObj } from '@storybook/react';
import { BiCalendarCheck } from 'react-icons/bi';

import { TimePicker } from './TimePicker';

const meta: Meta<typeof TimePicker> = {
  title: 'TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof TimePicker>;

export default meta;

export const Basic: Story = {};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  }
}

export const WithIcon: Story = {
  args: {
    icon: <BiCalendarCheck />,
  }
}
