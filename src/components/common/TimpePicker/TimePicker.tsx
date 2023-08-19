import type { FC, ReactNode } from 'react';
import type { CSSProp } from 'styled-components';
import { useCallback, useState } from 'react';
import {
  type ReactDatePickerProps,
  default as RDatePicker,
} from 'react-datepicker';
import tw from 'twin.macro';
import cx from 'classnames';

// Components
import { TimePickerInput, TimePickerContainer } from './picker';

export interface TimePickerProps extends Omit<ReactDatePickerProps, 'onChange'> {
  // the date picker input will occupy the entire width if true
  fullWidth?: boolean;

  // icon component to render on input
  icon?: ReactNode;

  // custom styles
  customStyles?: CSSProp,

  // event that will be called on every date change
  onChange?: (date: Date) => void;
}

const TimePicker: FC<TimePickerProps> = ({
  customStyles = tw``,
  fullWidth = false,
  icon = '',
  onChange = () => {},
  ...otherProps
}) => {
  const [date, setDate] = useState<Date | null>(new Date());

  const handleChange = useCallback((date: Date) => {
    setDate(date);

    if (onChange) {
      onChange(date);
    }
  }, [onChange]);

  return (
    <RDatePicker
      selected={date}
      dateFormat="h:mm aa"
      css={[
        tw`h-12 rounded-lg outline-none text-gray3`,
        tw`border border-gray4 border-solid`,
        !icon && tw`pl-4`,
        icon && tw`pl-14`,
        fullWidth && tw`w-full`,
        customStyles,
      ]}
      customInput={<TimePickerInput icon={icon} fullWidth={fullWidth} />}
      popperClassName="w-full max-w-calendar"
      popperPlacement="bottom-start"
      wrapperClassName={cx({
        'w-full': fullWidth,
        'w-auto': !fullWidth,
      })}
      calendarContainer={TimePickerContainer}
      onChange={handleChange}
      showTimeSelect
      showTimeSelectOnly
      {...otherProps}
    />
  );
}

export default TimePicker;
