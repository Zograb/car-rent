import type { PropsWithChildren } from 'react';
import tw from 'twin.macro';

const CarNumber = ({ children }: PropsWithChildren) => (
  <div
    css={[
      tw`flex justify-center items-center`,
      tw`h-6 w-16`,
      tw`bg-dark-gray/10 text-sm`,
    ]}
  >
    {children}
  </div>
);

export default CarNumber;
