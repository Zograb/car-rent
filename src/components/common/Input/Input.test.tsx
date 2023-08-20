import { render, screen } from '@testing-library/react';
import { BiSearch } from '@react-icons/all-files/bi/BiSearch';
import tw from 'twin.macro';

import { Input } from './Input';

describe('Input', () => {
  it('should match snapshot', () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });

  it('should render input', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('should render input with icon', () => {
    render(<Input icon={<BiSearch />} />);
    const input = screen.getByRole('textbox');
    const inputIcon = screen.getByTestId('icon-right');
    expect(input).toBeInTheDocument();
    expect(inputIcon).toBeInTheDocument();
  });

  it('should render input with icon on left', () => {
    render(<Input icon={<BiSearch />} iconPosition="left" />);
    const input = screen.getByRole('textbox');
    const inputIcon = screen.getByTestId('icon-left');
    expect(input).toBeInTheDocument();
    expect(inputIcon).toBeInTheDocument();
  });

  it('should render full width input', () => {
    render(<Input fullWidth />);
    const inputContainer = screen.getByTestId('input-container');
    expect(inputContainer).toBeInTheDocument();
    expect(inputContainer).toHaveStyleRule(
      'width',
      tw`w-full`.width as jest.Value,
    );
  });
});

