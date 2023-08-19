import { render } from '@testing-library/react';
import tw from 'twin.macro';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import { Button } from './Button';

describe('Button', () => {
  it('should match snapshot', () => {
    const { container } = render(<Button label="Button Label" />);
    expect(container).toMatchSnapshot();
  });

  it('should render button with label', () => {
    const { getByText } = render(<Button label="Button Label" />);
    const button = getByText('Button Label');
    expect(button).toBeInTheDocument();
  });

  it('should render primary button', () => {
    const { getByRole } = render(<Button label="Button Label" variant="primary" />);
    const button = getByRole('button');
    expect(button).toHaveStyleRule('background-color', tw`bg-primary`.backgroundColor as jest.Value);
  });

  it('should render secondary button', () => {
    const { getByRole } = render(<Button label="Button Label" variant="secondary" />);
    const button = getByRole('button');
    expect(button).toHaveStyleRule('background-color', tw`bg-white/20`.backgroundColor as jest.Value);
  });

  it('should render small button', () => {
    const { getByRole } = render(<Button label="Button Label" size="small" />);
    const button = getByRole('button');
    const style = tw`h-8 px-4`;
    expect(button).toHaveStyleRule('height', style.height as jest.Value);
    expect(button).toHaveStyleRule('padding-left', style.paddingLeft as jest.Value);
    expect(button).toHaveStyleRule('padding-right', style.paddingRight as jest.Value);
  });

  it('should render medium button', () => {
    const { getByRole } = render(<Button label="Button Label" size="medium" />);
    const button = getByRole('button');
    const style = tw`h-10 px-6`;
    expect(button).toHaveStyleRule('height', style.height as jest.Value);
    expect(button).toHaveStyleRule('padding-left', style.paddingLeft as jest.Value);
    expect(button).toHaveStyleRule('padding-right', style.paddingRight as jest.Value);
  });

  it('should render large button', () => {
    const { getByRole } = render(<Button label="Button Label" size="large" />);
    const button = getByRole('button');
    const style = tw`h-12 px-9`;
    expect(button).toHaveStyleRule('height', style.height as jest.Value);
    expect(button).toHaveStyleRule('padding-left', style.paddingLeft as jest.Value);
    expect(button).toHaveStyleRule('padding-right', style.paddingRight as jest.Value);
  });
});

