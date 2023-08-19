import type { Meta, StoryObj } from '@storybook/react';

import Table from './Table';
import { rows, columns } from './__mocks__/tableData';

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Basic: Story = {
  args: {
    rows,
    columns,
  },
};
