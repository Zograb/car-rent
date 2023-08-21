import type { FC } from 'react';
import type { DonutChartDataItem } from '@/types';
import 'twin.macro';

// Components
import { DonutChart } from '@/components/common/DonutChart';

interface StatisticCardProps {
  data: DonutChartDataItem[];
}

const StatisticChart: FC<StatisticCardProps> = ({ data }) => (
  <div tw="bg-white p-6 rounded-lg shadow-md">
    <div tw="flex justify-between items-center pb-3 text-gray3 mb-2">
      <div tw="font-medium text-lg">Hire vs Cancel</div>
      <div tw="bg-gray-100 py-1 px-2 rounded-sm text-xs">Today</div>
    </div>
    <DonutChart data={data} showLegend />
  </div>
);

export default StatisticChart;
