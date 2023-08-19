import type { Meta, StoryObj } from '@storybook/react';

import { LineChart } from './LineChart';
import { lineChartData } from './__mocks__/data';
import { COLORS } from '@/constants/tailwindConfig';

const meta: Meta<typeof LineChart> = {
  title: 'Line Chart',
  component: LineChart,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LineChart>;

export const Basic: Story = {
  args: {
    data: lineChartData,
    labelsDataKey: 'label',
    lines: [{ key: 'value1' }, { key: 'value2' }],
  },
};

export const WithFixedColors: Story = {
  args: {
    data: lineChartData,
    labelsDataKey: 'label',
    lines: [
      {
        key: 'value1',
        color: COLORS['primary'],
      },
      {
        key: 'value2',
        color: COLORS['black'],
      },
    ],
  },
}

export const WithAreaGradient: Story = {
  args: {
    data: lineChartData,
    labelsDataKey: 'label',
    lines: [
      {
        key: 'value1',
        drawAreaGradient: true,
      },
      {
        key: 'value2',
        drawAreaGradient: true,
      },
    ],
  },
}

export const WithDashedLine: Story = {
  args: {
    data: lineChartData,
    labelsDataKey: 'label',
    lines: [
      {
        key: 'value1',
        drawAreaGradient: true,
      },
      {
        key: 'value2',
        dashed: true,
      },
    ],
  },
}
