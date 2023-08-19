import type { Meta, StoryObj } from '@storybook/react';
import { AiOutlineCar } from 'react-icons/ai';

import Select from './Select';
import options from './__mocks__/options';
import 'twin.macro';

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
