import type { Meta, StoryObj } from '@storybook/react';
import tw from 'twin.macro';

import DonutChart from './DonutChart';
import donutChartData from './__mocks__/donutChartData';

const meta: Meta<typeof DonutChart> = {
  title: 'Donut Chart',
  component: DonutChart,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DonutChart>;

export const Basic: Story = {
  args: {
    data: donutChartData,
  },
};

export const WithLegend: Story = {
  args: {
    data: donutChartData,
    showLegend: true,
    containerStyle: tw`w-60 mx-auto`,
  },
}

export const WithLegendOnRight: Story = {
  args: {
    data: donutChartData,
    showLegend: true,
    containerStyle: tw`mx-auto w-96`,
    legendPosition: 'right',
  },
}
