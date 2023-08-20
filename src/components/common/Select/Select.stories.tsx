import type { Meta, StoryObj } from '@storybook/react';
import { AiOutlineCar } from '@react-icons/all-files/ai/AiOutlineCar';

import { Select } from './Select';
import options from './__mocks__/options';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Select>;

export default meta;

export const Basic: Story = {
  args: {
    options,
  }
};

export const WithIcon: Story = {
  args: {
    icon: <AiOutlineCar />,
    options,
  }
}
