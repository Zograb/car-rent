import { cloneElement, type ReactElement } from 'react';
import { render } from '@testing-library/react';
import recharts from 'recharts';

// Components
import LineChart from './LineChart';

// Mocks
import { lineChartData } from './__mocks__/data';
import {
  mockResizeObserverBefore,
  mockResizeObserverAfter,
} from '@/__mocks__';

// Constants
import { COLORS } from '@/constants/tailwindConfig';

const ResponsiveContainer = ({ children, height }: { children: ReactElement, height: number }) =>
  cloneElement(children, { width: 500, height })

// Remove responsive container and render line chart directly
// Otherwise in test envirinment it will not render chart at all
jest.mock('recharts', () => {
  const OriginalModule: typeof recharts = jest.requireActual('recharts');

  return {
    ...OriginalModule,
    ResponsiveContainer,
  };
});

describe('Line Chart', () => {
  beforeEach(mockResizeObserverBefore);

  afterEach(mockResizeObserverAfter);

  it('should match snapshot', () => {
    const { container } = render(
      <LineChart
        data={lineChartData}
        labelsDataKey="date"
        lines={[
          { key: 'value', drawAreaGradient: true, color: COLORS['primary'] },
          {
            key: 'previousYearValue',
            drawAreaGradient: false,
            dashed: true,
            color: COLORS['gray3'],
          },
        ]}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should render line chart', () => {
    const { getByRole } = render(
      <LineChart
        data={lineChartData}
        labelsDataKey="date"
        lines={[
          {
            key: 'value',
            drawAreaGradient: true,
            color: COLORS['primary'],
          },
          {
            key: 'previousYearValue',
            drawAreaGradient: false,
            dashed: true,
            color: COLORS['gray3'],
          },
        ]}
      />
    );
    const lineChart = getByRole('region');
    expect(lineChart).toBeInTheDocument();
  });

  it('should render line chart with custom ticks', () => {
    const { container } = render(
      <LineChart
        data={lineChartData}
        labelsDataKey="date"
        lines={[
          {
            key: 'value',
            drawAreaGradient: true,
            color: COLORS['primary'],
          },
          {
            key: 'previousYearValue',
            drawAreaGradient: false,
            dashed: true,
            color: COLORS['gray3'],
          },
        ]}
        xAxisProps={{
          tickFormatter: () => 'xAxisTick',
        }}
      />
    );
    const xAxisTick = container.querySelector('.recharts-cartesian-axis-tick-value');
    expect(xAxisTick).toHaveTextContent('xAxisTick');
  })
});
