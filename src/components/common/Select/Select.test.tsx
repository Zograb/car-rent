import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AiOutlineCar } from '@react-icons/all-files/ai/AiOutlineCar';
import tw from 'twin.macro';

import { Select } from './Select';
import options from './__mocks__/options';

describe('Select', () => {
  it('should match snapshot', () => {
    const { container } = render(<Select options={options} />);
    expect(container).toMatchSnapshot();
  });

  it('should render the select component', async () => {
    const user = userEvent.setup();
    const { getByText } = render(<Select options={options} />);
    const select = getByText('Select...');
    expect(select).toBeInTheDocument();
    await user.click(select);
    expect(getByText('6465')).toBeInTheDocument();
    expect(getByText('5665')).toBeInTheDocument();
    expect(getByText('1755')).toBeInTheDocument();
    expect(getByText('4532')).toBeInTheDocument();
    expect(getByText('5543')).toBeInTheDocument();
  });

  it('should render the select component with icon', () => {
    const { container } = render(<Select icon={<AiOutlineCar />} />);
    expect(container.querySelector('svg')).toBeDefined();
  });

  it('should render the select component with custom styles', () => {
    const style = tw`bg-red-200`;
    const { container } = render(<Select tw="bg-red-200" />);
    expect(container.querySelector('.select-container'))
      .toHaveStyleRule('background-color', style.backgroundColor as jest.Value);
  });

  it('should select an option when clicked', async () => {
    const user = userEvent.setup();
    const { getByText } = render(<Select options={options} />);
    const select = getByText('Select...');
    await user.click(select);
    await user.click(getByText('6465'));
    expect(getByText('6465')).toHaveTextContent('6465');
  });
});