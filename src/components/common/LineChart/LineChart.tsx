import type { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';
import type { LineChartLine } from '@/types';
import { Fragment, memo } from 'react';
import {
  type YAxisProps,
  type XAxisProps,
  type TooltipProps,
  Area,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import 'twin.macro';

// Utils
import { getRandomColor } from '@/utils';

export interface LineChartProps extends CategoricalChartProps {
  // key to determine which field is label
  labelsDataKey: string;

  // array of config objects to render lines
  lines: LineChartLine[];

  // chart data
  // eslint-disable-next-line
  data: any[];

  // config for chart Y axis
  yAxisProps?: YAxisProps;

  // config for chat X axis
  xAxisProps?: XAxisProps;

  // config for tooltip
  tooltipProps?: TooltipProps<number, string>;
}

export const LineChart = memo(({
  data,
  labelsDataKey,
  lines,
  yAxisProps,
  xAxisProps,
  tooltipProps,
}: LineChartProps) => (
  <div tw="overflow-x-scroll sm:overflow-x-auto">
    <ResponsiveContainer width="99%" height={250} minWidth={300}>
      <ComposedChart data={data} margin={{ bottom: 25, top: 10 }}>
        <XAxis
          dataKey={labelsDataKey}
          axisLine={false}
          tickLine={false}
          dy={25}
          {...xAxisProps}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          dx={-10}
          {...yAxisProps}
        />
        <Tooltip {...tooltipProps} />
        {lines.map((line) => {
          const color = line.color || getRandomColor();
          return (
            <Fragment key={line.key}>
              <Line
                type="monotone"
                dataKey={line.key}
                stroke={color}
                strokeDasharray={line.dashed ? '8 8' : ''}
              />
              {line.drawAreaGradient && (
                <Fragment>
                  <Area
                    type="monotone"
                    dataKey={line.key}
                    stroke={color}
                    strokeWidth={2}
                    fillOpacity={1}
                    fill={`url(#color-${line.key})`}
                  />
                  <defs>
                    <linearGradient
                      id={`color-${line.key}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={color} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                </Fragment>
              )}
            </Fragment>
          );
        })}
      </ComposedChart>
    </ResponsiveContainer>
  </div>
));

LineChart.displayName = 'LineChart ';
