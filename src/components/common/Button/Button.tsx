'use client';

import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactNode,
  FC,
} from 'react';
import tw from 'twin.macro';
import { CgSpinner } from 'react-icons/cg';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  // button label
  label?: string;

  // changes button styles depending on the variant. Primary by default.
  variant?: 'primary' | 'secondary';

  // changes height, width and padding depending on the size. Medium by default.
  size?: 'small' | 'medium' | 'large';

  // button icon component
  icon?: ReactNode;

  // determines if button should render icon only
  iconButton?: boolean;

  // toggle button loading state
  loading?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  label,
  children,
  icon,
  iconButton = false,
  variant = 'primary',
  size = 'medium',
  loading = false,
  ...otherProps
}) => (
  <button
    css={[
      tw`text-white font-medium ease-linear duration-200 rounded`,
      tw`active:shadow active:opacity-70 hover:opacity-80`,
      tw`flex justify-center items-center`,
      variant === 'primary' && tw`bg-primary active:shadow-primary`,
      variant === 'secondary' && tw`bg-white/20 active:shadow-white/20`,
      size === 'small' && tw`h-8 px-4`,
      size === 'medium' && tw`h-10 px-6`,
      size === 'large' && tw`h-12 px-9`,
      loading && tw`pointer-events-none`,
    ]}
    {...otherProps}
  >
    {loading && <CgSpinner tw="animate-spin text-2xl" />}
    {!loading && (
      <>
        <span>{icon}</span>
        {!iconButton && (
          <span css={[icon && tw`ml-3`]}>
            {label || children}
          </span>
        )}
      </>
    )}
  </button>
);
