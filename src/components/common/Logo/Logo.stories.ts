import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Basic: Story = {
  args: {
    hideLogoName: false,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const WithoutLogoName: Story = {
  args: {
    hideLogoName: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
