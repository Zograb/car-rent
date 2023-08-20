import { render } from '@testing-library/react';
import tw from 'twin.macro';

import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('should match snapshot', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });

  it('should render spinner', () => {
    const { getByTestId } = render(<Spinner />);
    const spinner = getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('should render small spinner', () => {
    const { getByTestId } = render(<Spinner size="small" />);
    const spinner = getByTestId('spinner');
    expect(spinner).toHaveStyleRule('font-size', tw`text-2xl`.fontSize as jest.Value);
  });

  it('should render medium spinner', () => {
    const { getByTestId } = render(<Spinner size="medium" />);
    const spinner = getByTestId('spinner');
    expect(spinner).toHaveStyleRule('font-size', tw`text-4xl`.fontSize as jest.Value);
  });

  it('should render large spinner', () => {
    const { getByTestId } = render(<Spinner size="large" />);
    const spinner = getByTestId('spinner');
    expect(spinner).toHaveStyleRule('font-size', tw`text-6xl`.fontSize as jest.Value);
  });

  it('should render with custom styles', () => {
    const { getByTestId } = render(<Spinner tw="text-primary" />);
    const spinner = getByTestId('spinner');
    expect(spinner).toHaveStyleRule('color', tw`text-primary`.color as jest.Value);
  });
});
