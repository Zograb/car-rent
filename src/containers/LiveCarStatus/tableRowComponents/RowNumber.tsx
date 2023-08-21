import type { PropsWithChildren } from 'react';
import 'twin.macro';

const RowNumber = ({ children }: PropsWithChildren) => (
  <div tw="text-sm">{children}</div>
);

export default RowNumber;
