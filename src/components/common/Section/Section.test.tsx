import { render, screen } from '@testing-library/react';

import Section from './Section';

describe('Section', () => {
  it('should match snapshot', () => {
    const { container } = render(<Section />);
    expect(container).toMatchSnapshot();
  });

  it('should render section', () => {
    render(
      <Section>
        <span>Section content</span>
      </Section>
    );
    const section = screen.getByText('Section content');
    expect(section).toBeInTheDocument();
  });
});

