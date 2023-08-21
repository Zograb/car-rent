import type { FC, ReactNode } from 'react';
import {
  type Props,
  default as ReactSelect,
} from 'react-select';
import 'twin.macro';

// Components
import { SelectControl, SelectInput, SelectPlaceholder } from './components';

export interface SelectProps extends Props {
  // icon component to render on select
  icon?: ReactNode;
}

export const Select: FC<SelectProps> = ({
  icon = null,
  options,
  className,
  ...otherProps
}) => (
  <ReactSelect
    // eslint-disable-next-line
    // @ts-ignore-next-line
    icon={icon}
    options={options}
    components={{
      IndicatorSeparator: null,
      Control: SelectControl,
      Input: SelectInput,
      Placeholder: SelectPlaceholder,
    }}
    className={`select-container ${className}`}
    tw="w-96 h-full"
    {...otherProps}
  />
)
