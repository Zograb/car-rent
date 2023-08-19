import type { Meta, StoryObj } from '@storybook/react';

import { Section } from './Section';

const meta: Meta<typeof Section> = {
  title: 'Section',
  component: Section,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Section>;

export default meta;

export const Basic: Story = {
  args: {
    children: <span>Section content</span>,
  }
};
