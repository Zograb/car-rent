import type { DonutChartDataItem } from '@/types';
import type { CSSProp } from 'styled-components';
import { type FC, useCallback, useMemo } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import tw from 'twin.macro';

// Utils
import { getRandomColor } from '@/utils';

export interface DonutChartProps {
  // container styles for chart and legend
  containerStyle?: CSSProp;

  // class for chart container
  className?: string;

  // show/hide chart legend
  showLegend?: boolean;

  // determine which side to render chart legend
  legendPosition?: 'bottom' | 'right';

  // chart data to render cells
  data: DonutChartDataItem[];
}

export const DonutChart: FC<DonutChartProps> = ({
  containerStyle = tw``,
  className = '',
  legendPosition = 'bottom',
  data,
  showLegend,
}) => {
  // Generate random color if not provided
  const colors: string[] = useMemo(() => (
    data.map(((d: DonutChartDataItem) => d.color || getRandomColor()))
  ), [data]);

  const totalValue: number = useMemo(() => {
    let value = 0;
    for (let i = 0; i < data.length; i++) {
      value += data[i].value;
    }
    return value;
  }, [data]);

  const getPercentOfTotal = useCallback((value: number): string => {
    const percent = Math.round(value * 100 / totalValue);
    return `${percent}%`;
  }, [totalValue]);

  return (
    <div
      css={[
        legendPosition === 'right' && tw`flex justify-start items-center`,
        containerStyle,
      ]}
    >
      <div
        css={[
          tw`w-44 h-44`,
          legendPosition === 'bottom' && tw`mx-auto`,
        ]}
        className={className}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={data}
              fill="#8884d8"
              innerRadius={45}
              stroke="none"
              data-testid="chart"
            >
              {colors.map((color, index) => <Cell key={`cell-${index}`} fill={color} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      {showLegend && (
        <div
          css={[
            legendPosition === 'bottom' && tw`mt-4`,
            legendPosition === 'right' && tw`ml-4 grow`,
          ]}
          data-testid="donut-chart-legend"
        >
          {data.map((d, index) => (
            <div tw="flex items-center mb-2" key={d.name}>
              <div
                tw="rounded-full w-4 h-4"
                style={{ backgroundColor: d.color || colors[index] }}
              />
              <div tw="grow ml-3 capitalize">{d.name}</div>
              <div>{getPercentOfTotal(d.value)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
