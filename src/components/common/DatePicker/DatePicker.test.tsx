import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import tw from 'twin.macro';

import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2000, 12, 12));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should match snapshot', async () => {
    const user = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    });
    const { getByRole, container } = render(<DatePicker />);
    const input = getByRole('textbox');
    await user.click(input);
    expect(container).toMatchSnapshot();
  });

  it('should render datepicker', () => {
    const { getByRole } = render(<DatePicker />);
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('should call onChange when a date is selected', async () => {
    const user = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    });
    const mockOnChange = jest.fn();
    const { getByRole, findByText } = render(<DatePicker onChange={mockOnChange} />);
    const input = getByRole('textbox');
    await user.click(input);
    const todayButton = await findByText('15');
    await user.click(todayButton);
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should render full width input', async () => {
    const { getByRole } = render(<DatePicker fullWidth />);
    const input = getByRole('textbox');
    expect(input).toHaveStyleRule('width', tw`w-full`.width as jest.Value);
  });

  it('should render input with custom styles', () => {
    const style = tw`bg-red-500`;
    const { getByRole } = render(<DatePicker tw="bg-red-500" />);
    const input = getByRole('textbox');
    expect(input).toHaveStyleRule('background-color', style.backgroundColor as jest.Value);
  });
});
