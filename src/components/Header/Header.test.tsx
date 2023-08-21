import { render, screen } from '@testing-library/react';

// Components
import Header from './Header';

describe('Header', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Header toggleMenu={() => {}}/>
    );
    expect(container).toMatchSnapshot();
  });

  it('should render header', () => {
    render(
      <Header toggleMenu={() => {}} />
    );
    const header = screen.getByTestId('header');

    expect(header).toBeInTheDocument();
  });
});
