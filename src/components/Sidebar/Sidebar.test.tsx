import { render, screen } from '@testing-library/react';

// Components
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Sidebar
        menuOpen={false}
        toggleMenu={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should render sidebar', () => {
    render(
      <Sidebar
        menuOpen={false}
        toggleMenu={() => {}}
      />
    );
    const sidebar = screen.getByTestId('sidebar');

    expect(sidebar).toBeInTheDocument();
  });
});

