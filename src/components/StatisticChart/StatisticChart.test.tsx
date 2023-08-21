import type { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import recharts from 'recharts';

// Components
import StatisticChart from './StatisticChart';

// Mocks
import donutChartData from '@/components/common/DonutChart/__mocks__/donutChartData';
import {
  mockResizeObserverAfter,
  mockResizeObserverBefore,
} from '@/__mocks__/';

// Set responsive container width and height to fixed value
// Otherwise in test envirinment it will not render chart at all
jest.mock('recharts', () => {
  const OriginalModule: typeof recharts = jest.requireActual('recharts');

  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: { height: number, children: ReactElement }) => (
      <div style={{ width: 500, height: 500 }}>
        {children}
      </div>
    ),
  };
});

describe('StatisticChart', () => {
  beforeEach(() => {
    mockResizeObserverBefore();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <StatisticChart data={donutChartData} />
    );
    expect(container).toMatchSnapshot();
  });

  it('should render statistic chart', () => {
    const { container } = render(
      <StatisticChart data={donutChartData} />
    );
    const statisticChartTitle = screen.getByText('Hire vs Cancel');
    const chart = container.querySelector('svg');
    expect(statisticChartTitle).toBeInTheDocument();
    expect(chart).toBeInTheDocument();
  });

  afterEach(mockResizeObserverAfter);
});
