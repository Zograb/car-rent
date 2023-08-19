import type { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import recharts from 'recharts';

// Components
import DonutChart from './DonutChart';

// Mocks
import donutChartData from './__mocks__/donutChartData';
import {
  mockResizeObserverBefore,
  mockResizeObserverAfter,
} from '@/__mocks__';

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

describe('DonutChart', () => {
  beforeEach(mockResizeObserverBefore);

  afterEach(mockResizeObserverAfter);

  it('should match snapshot', async () => {
    const { container } = render(<DonutChart data={donutChartData} />);
    expect(container).toMatchSnapshot();
  });

  it('should render chart', async () => {
    const { container } = render(<DonutChart data={donutChartData} />);
    const chart = container.querySelector('svg');
    expect(chart).toBeInTheDocument();
  });

  it('should render chart with legend', async () => {
    render(<DonutChart data={donutChartData} showLegend />);
    const chartLegend = screen.getByTestId('donut-chart-legend');
    expect(chartLegend).toBeInTheDocument();
  });
});

