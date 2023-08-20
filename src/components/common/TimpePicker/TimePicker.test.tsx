import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import tw from 'twin.macro';

import { TimePicker } from './TimePicker';

describe('TimePicker', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2000, 12, 12));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should match snapshot', () => {
    const { container } = render(<TimePicker />);
    expect(container).toMatchSnapshot();
  });

  it('should render the component', () => {
    const { getByRole } = render(<TimePicker />);
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('should call onChange when a time is selected', async () => {
    const user = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    });
    const mockOnChange = jest.fn();
    const { getByRole, findByText } = render(<TimePicker onChange={mockOnChange} />);
    const input = getByRole('textbox');
    await user.click(input);
    const timeButton = await findByText('1:00 AM');
    await user.click(timeButton);
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should render full width input', async () => {
    const { getByRole } = render(<TimePicker fullWidth />);
    const input = getByRole('textbox');
    expect(input).toHaveStyleRule('width', tw`w-full`.width as jest.Value);
  });

  it('should render time picker with custom styles', () => {
    const style = tw`bg-red-500`;
    const { getByRole } = render(<TimePicker customStyles={style} />);
    const input = getByRole('textbox');
    expect(input).toHaveStyleRule('background-color', style.backgroundColor as jest.Value);
  });
});
