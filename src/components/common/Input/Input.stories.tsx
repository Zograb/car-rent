import type { Meta, StoryObj } from '@storybook/react';
import { BiSearch } from '@react-icons/all-files/bi/BiSearch';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
};

const icon = <BiSearch />;

type Story = StoryObj<typeof Input>;

export default meta;

export const Basic: Story = {};

export const WithIcon: Story = {
  args: {
    icon: <BiSearch />
  },
};

export const WithIconOnLeft: Story = {
  args: {
    icon,
    iconPosition: 'left',
  },
};

export const FullWidth: Story = {
  args: {
    icon,
    iconPosition: 'left',
    fullWidth: true,
  },
};
