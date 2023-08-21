import { render } from '@testing-library/react';
import { format, subYears } from 'date-fns';

// Components
import CustomTooltip from './CustomTooltip';

// Utils
import { formatNumberToCurrency } from '@/utils';


const payload = [
  {
    value: 10000,
    dataKey: 'value',
    payload: {
      previousYearValue: 15000,
    },
  },
]

describe('CustomTooltip', () => {
  // Temporarily workaround for bug in @testing-library/react when use user-event with `vi.useFakeTimers()`
  beforeAll(() => {
    const _jest = globalThis.jest;
    globalThis.jest = {
      ...globalThis.jest,
      advanceTimersByTime: jest.advanceTimersByTime,
    };
    return () => void (globalThis.jest = _jest);
  });

  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2000, 12, 12));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <CustomTooltip
        label={new Date()}
        payload={payload}
        active
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should render custom tooltip', () => {
    const { getByTestId } = render(
      <CustomTooltip
        label={new Date()}
        payload={payload}
        active
      />
    );
    const tooltip = getByTestId('custom-tooltip');
    expect(tooltip).toBeInTheDocument();
  });

  it('should render label and value in tooltip', () => {
    const date = new Date();
    const { getByText } = render(
      <CustomTooltip
        label={date}
        payload={payload}
        active
      />
    );
    const label = getByText(format(date, 'MMMM'));
    const value1 = formatNumberToCurrency(10000, {
      notation: 'compact'
    });
    const value2 = formatNumberToCurrency(15000, {
      notation: 'compact',
    });
    expect(label).toBeInTheDocument();
    expect(getByText(`${format(date, 'yyyy')}: ${value1}`)).toBeInTheDocument();
    expect(getByText(`${format(subYears(date, 1), 'yyyy')}: ${value2}`)).toBeInTheDocument();
  });

});
