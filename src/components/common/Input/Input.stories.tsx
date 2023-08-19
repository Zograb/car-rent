import type { Meta, StoryObj } from '@storybook/react';
import { CiSearch } from 'react-icons/ci';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
};

const icon = <CiSearch />;

type Story = StoryObj<typeof Input>;

export default meta;

export const Basic: Story = {};

export const WithIcon: Story = {
  args: {
    icon: <CiSearch />
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
