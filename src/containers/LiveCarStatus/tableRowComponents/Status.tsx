import tw from 'twin.macro';

// Utils
import { LiveCarStatus } from '@/utils';

export interface StatusProps {
  status: LiveCarStatus;
}

const Status = ({ status }: StatusProps) => (
  <div tw="flex justify-start items-center">
    <div
      css={[
        tw`w-4 h-4 rounded-full bg-green relative`,
        status === LiveCarStatus.COMPLERTED && tw`bg-green`,
        status === LiveCarStatus.IN_ROUTE && tw`bg-secondary`,
        status === LiveCarStatus.PENDING && tw`bg-primary`,
      ]}
    >
      <div
        css={[
          tw`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`,
          tw`w-5/6 h-5/6 rounded-full`,
          tw`border border-white border-solid`,
        ]}
      />
    </div>
    <div tw="text-gray2 ml-4">{status}</div>
  </div>
);

export default Status;
