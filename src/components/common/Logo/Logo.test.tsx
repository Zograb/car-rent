import { render } from '@testing-library/react';

import Logo from './Logo';

describe('Logo', () => {
  it('should match snapshot', () => {
    const { container } = render(<Logo />);
    expect(container).toMatchSnapshot();
  });

  it('should render logo', () => {
    const { getByTestId } = render(<Logo />);
    const logo = getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });

  it('should render logo without name', () => {
    const { queryByTestId } = render(<Logo hideLogoName />);
    const logoName = queryByTestId('logo-name');
    expect(logoName).not.toBeInTheDocument();
  });
});
