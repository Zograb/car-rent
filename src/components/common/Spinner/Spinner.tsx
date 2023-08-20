import type { ComponentPropsWithoutRef, FC } from 'react';
import { CgSpinner } from '@react-icons/all-files/cg/CgSpinner';
import tw from 'twin.macro';

export interface SpinnerProps extends ComponentPropsWithoutRef<'svg'> {
  // spinner size
  size?: 'small' | 'medium' | 'large';
}

export const Spinner: FC<SpinnerProps> = ({
  size = 'small',
  ...otherProps
}) => (
  <CgSpinner
    css={[
      tw`animate-spin`,
      size === 'small' && tw`text-2xl`,
      size === 'medium' && tw`text-4xl`,
      size === 'large' &&  tw`text-6xl`,
    ]}
    {...otherProps}
    data-testid="spinner"
  />
)
