import Image from 'next/image';
import 'twin.macro';

export interface DriverProps {
  name: string;
  avatarUrl: string;
}

const Driver = ({ avatarUrl, name }: DriverProps) => (
  <div tw="flex justify-start items-center">
    <Image
      src={avatarUrl}
      alt="avatar"
      width={24}
      height={24}
      tw="rounded-full"
    />
    <div tw="ml-3 max-w-xxs truncate">{name}</div>
  </div>
);

export default Driver;
