import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import EarningSummaryHead from './EarningSummaryHead';
import { format, subMonths } from 'date-fns';

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
      <EarningSummaryHead
        startDate={new Date()}
        endDate={new Date()}
        minDate={new Date()}
        setStartDate={jest.fn()}
        setEndDate={jest.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render earning summary head', () => {
    const { getByTestId } = render(
      <EarningSummaryHead
        startDate={new Date()}
        endDate={new Date()}
        minDate={new Date()}
        setStartDate={jest.fn()}
        setEndDate={jest.fn()}
      />
    );

    const earningSummaryHead = getByTestId('earning-summary-head');
    expect(earningSummaryHead).toBeInTheDocument();
  });

  it('should render earning summary head with correct dates', () => {
    const endDate = new Date();
    const startDate = subMonths(new Date(), 4);
    const { getByDisplayValue } = render(
      <EarningSummaryHead
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        setStartDate={jest.fn()}
        setEndDate={jest.fn()}
      />
    );

    const startDateInput = getByDisplayValue(format(startDate, 'MMM dd, yyy'));
    const endDateInput = getByDisplayValue(format(endDate, 'MMM dd, yyy'));
    expect(startDateInput).toBeInTheDocument();
    expect(endDateInput).toBeInTheDocument();
  });

  it('should call setStartDate and setEndDate function on inputs changes', async () => {
    const user = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    });
    const setStartDateFn = jest.fn();
    const setEndDateFn = jest.fn();
    const endDate = new Date();
    const startDate = subMonths(new Date(), 4);
    const { getByDisplayValue, findByText } = render(
      <EarningSummaryHead
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        setStartDate={setStartDateFn}
        setEndDate={setEndDateFn}
      />
    );
    const startDateInput = getByDisplayValue(format(startDate, 'MMM dd, yyy'));
    const endDateInput = getByDisplayValue(format(endDate, 'MMM dd, yyy'));
    await user.click(startDateInput);
    await user.click(await findByText('14'));
    await user.click(endDateInput);
    await user.click(await findByText('16'));
    expect(setStartDateFn).toHaveBeenCalled();
    expect(setEndDateFn).toHaveBeenCalled();
  });
});
