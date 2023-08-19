import type { TableColumn, TableRow } from '@/types/Table';
import { type FC, memo } from 'react';
import 'twin.macro';

export interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
}

const Table: FC<TableProps> = memo(({ columns, rows }) => (
  <div tw="overflow-x-scroll lg:overflow-x-auto">
    <table tw="w-full min-w-table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={column.key}
              align={index === columns.length - 1 ? 'right': 'left'}
              tw="font-light text-sm py-3"
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody tw="[&>tr]:(border-t border-solid border-gray4)">
        {rows.map((row, index) => (
          <tr key={index}>
            {columns.map((column, index) => (
              <td
                key={column.key}
                align={index === columns.length - 1 ? 'right': 'left'}
                tw="py-4"
              >
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
));

export default Table;
