import type { Meta, StoryObj } from '@storybook/react';
import { BiCalendarCheck } from '@react-icons/all-files/bi/BiCalendarCheck';

import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Date Picker',
  component: DatePicker,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof DatePicker>;

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
