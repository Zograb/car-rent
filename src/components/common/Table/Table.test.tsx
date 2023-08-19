import { render } from '@testing-library/react';

import Table from './Table';
import { columns, rows } from './__mocks__/tableData';

describe('Select', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Table rows={rows} columns={columns} />
    );
    expect(container).toMatchSnapshot();
  });

  it('should render table with rows and columns', () => {
    const { getByRole } = render(
      <Table rows={rows} columns={columns} />
    );
    const table = getByRole('table');
    expect(table).toBeInTheDocument();
  });
});
