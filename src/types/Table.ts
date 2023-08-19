import type { ReactNode } from 'react';

export interface TableColumn {
  key: string;
  label: string;
}

export interface TableRow {
  [key: string]: string | ReactNode;
}
