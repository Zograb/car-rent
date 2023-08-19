import type { Meta, StoryObj } from '@storybook/react';
import { AiOutlineCloudDownload } from 'react-icons/ai';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <AiOutlineCloudDownload />,
    label: 'Download',
  },
};

export const IconButton: Story = {
  args: {
    icon: <AiOutlineCloudDownload />,
    iconButton: true,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}
