import type { FC } from 'react';
import Image, { type ImageProps } from 'next/image';
import 'twin.macro';

// Asssets
import LogoSrc from '@/assets/images/logo.svg';

export interface LogoProps extends Omit<ImageProps, 'src' | 'alt'> {
  // hide/show logo name
  hideLogoName?: boolean;
}

export const Logo: FC<LogoProps> = ({ hideLogoName = false, ...otherProps }) => (
  <div data-testid="logo" tw="flex justify-start items-center">
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
