import { FiTrash2 } from '@react-icons/all-files/fi/FiTrash2';
import 'twin.macro';

// Components
import { Button } from '@/components';

// Utils
import { formatNumberToCurrency } from '@/utils';

const row = {
  number: <div className="text-sm">01</div>,
  id: '12345',
  user: 'John Doe',
  status: 'Approved',
  earning: formatNumberToCurrency(3250),
  actions: (
    <div className="flex justify-end items-center">
      <Button size="small" className="mr-2 text-xl" icon={<FiTrash2 />} iconButton />
      <Button size="small">Details</Button>
    </div>
  ),
}

export const rows = [row, row, row, row];
export const columns = [
  { key: 'id', label: 'ID' },
  { key: 'user', label: 'User' },
  { key: 'status', label: 'Status' },
  { key: 'earning', label: 'Earning' },
  { key: 'actions', label: '' },
];
