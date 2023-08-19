import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import type { CSSProp } from 'styled-components';
import tw from 'twin.macro';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  // icon component
  icon?: ReactNode;

  // determines icon position on input
  iconPosition?: 'left' | 'right';

  // the input will occupy the entire width if true
  fullWidth?: boolean;

  // styles for input container
  containerStyles?: CSSProp;
}

const Input: FC<InputProps> = ({
  icon = null,
  iconPosition = 'right',
  fullWidth = false,
  containerStyles = tw``,
  ...otherProps
}) => (
  <div
    css={[
      tw`relative inline-block`,
      !fullWidth && tw`w-80`,
      fullWidth && tw`w-full`,
      containerStyles,
    ]}
    data-testid="input-container"
  >
    {iconPosition === 'left' && (
      <div
        tw="absolute top-1/2 left-4 -translate-y-1/2 text-3xl text-gray2"
        data-testid="icon-left"
      >
        {icon}
      </div>
    )}
    <input
      placeholder="Search here..."
      css={[
        tw`ease-linear duration-200 text-gray3 rounded-xl h-12 w-full outline-none`,
        tw`shadow-input focus:shadow-input-focused`,
        iconPosition === 'right' && tw`pl-8 pr-16`,
        iconPosition === 'left' && tw`pl-14 pr-8`,
      ]}
      {...otherProps}
    />
    {iconPosition === 'right' && (
      <div
        tw="absolute top-1/2 right-7 -translate-y-1/2 text-3xl text-gray2"
        data-testid="icon-right"
      >
        {icon}
      </div>
    )}
  </div>
);

export default Input;
