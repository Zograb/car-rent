import type { TableColumn, TableRow } from '@/types/Table';
import type { LiveCar } from '@/types/CarStatus';
import { useMemo } from 'react';
import { VscSettings } from '@react-icons/all-files/vsc/VscSettings';
import 'twin.macro';

// Components
import { Section, Table } from '@/components';
import { Actions, CarNumber, Driver, RowNumber, Status } from './tableRowComponents';

// Utils
import {
  formatNumberToCurrency,
  LiveCarStatus as LiveCarStatusEnum,
} from '@/utils';

const rows: LiveCar[] = [
  {
    carNumber: 5544,
    driver: {
      avatarUrl: 'https://i.pravatar.cc/50',
      name: 'John Doe',
    },
    earning: 24020,
    status: LiveCarStatusEnum.COMPLERTED,
  },
  {
    carNumber: 3453,
    driver: {
      avatarUrl: 'https://i.pravatar.cc/60',
      name: 'Alex Noman',
    },
    earning: 12600,
    status: LiveCarStatusEnum.PENDING,
  },
  {
    carNumber: 1234,
    driver: {
      avatarUrl: 'https://i.pravatar.cc/70',
      name: 'Abraham Lincoln',
    },
    earning: 65422,
    status: LiveCarStatusEnum.IN_ROUTE,
  },
]

export const LiveCarStatus = () => {
  const columns: TableColumn[] = useMemo(() => ([
    { key: 'number', label: 'No.' },
    { key: 'car_number', label: 'Car no.' },
    { key: 'driver', label: 'Driver' },
    { key: 'status', label: 'Status' },
    { key: 'earning', label: 'Earning' },
    { key: 'actions', label: '' },
  ]), []);


  const convertedRow: TableRow[] = useMemo(() => {
    return rows.map((row, index) => ({
      number: <RowNumber>{index}</RowNumber>,
      car_number: <CarNumber>{row.carNumber}</CarNumber>,
      driver: <Driver name={row.driver.name} avatarUrl={row.driver.avatarUrl} />,
      status: <Status status={row.status} />,
      earning: formatNumberToCurrency(row.earning),
      actions: <Actions />,
    }));
  }, []);

  return (
    <Section>
      <div tw="flex justify-between w-full">
        <div tw="text-black font-semibold">Live Car Status</div>
        <div tw="flex justify-end items-center text-gray2">
          <VscSettings />
          <span tw="ml-2">Filter</span>
        </div>
      </div>
      <Table columns={columns} rows={convertedRow} />
    </Section>
  );
}
