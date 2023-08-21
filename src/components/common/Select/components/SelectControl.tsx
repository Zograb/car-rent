import type { FC } from 'react';
import { components, type ControlProps } from 'react-select';
import cx from 'classnames';

const { Control } = components;

const SelectControl: FC<ControlProps> = ({ children, ...otherProps }) => {
  // eslint-disable-next-line
  // @ts-ignore-next-line
  const { icon } = otherProps.selectProps;

  return (
    <Control
      {...otherProps}
      className={cx(
        'h-12',
        '!border !border-gray4 !border-solid',
        'outline-none !rounded-lg !shadow-none',
        {
          'pl-12': icon,
          'pl-2': !icon,
        }
      )}
    >
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">
          {icon}
        </div>
      )}
      {children}
    </Control>
  );
}

export default SelectControl;
