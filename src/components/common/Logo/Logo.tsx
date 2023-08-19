import type { FC } from 'react';
import Image, { type ImageProps } from 'next/image';
import 'twin.macro';

// Asssets
import LogoSrc from '@/assets/images/logo.svg';

export interface LogoProps extends Omit<ImageProps, 'src' | 'alt'> {
  // hide/show logo name
  hideLogoName?: boolean;
}

const Logo: FC<LogoProps> = ({ hideLogoName = false, ...otherProps }) => (
  <div tw="flex justify-start items-center" data-testid="logo">
    <Image
      tw="h-logo-vertical"
      width={40}
      height={30}
      src={LogoSrc}
      alt={'Logo'}
      {...otherProps}
    />
    {!hideLogoName && (
      <div
        tw="ml-1 text-white text-logo font-bold"
        data-testid="logo-name"
      >
        CAR RENT
      </div>
    )}
  </div>
);

export default Logo;
