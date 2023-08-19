import type { FC, ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  default as RDatePicker,
  type ReactDatePickerProps,
} from 'react-datepicker';
import tw from 'twin.macro';

import {
  CalendarContainer,
  CalendarDayContents,
  CalendarHead,
  CalendarInput,
  CalendarWeekDay,
} from './calendar';

export interface DatePickerProps extends Omit<ReactDatePickerProps, 'onChange'> {
  // the date picker input will occupy the entire width if true
  fullWidth?: boolean;

  // icon component to render on input
  icon?: ReactNode;

  // default date to set on component init
  defaultDate?: Date,

  // event that will be called on every date change
  onChange?: (date: Date) => void;
}

const DatePicker: FC<DatePickerProps> = ({
  fullWidth = false,
  icon = '',
  defaultDate,
  onChange,
  ...otherProps
}) => {
  const [date, setDate] = useState<Date | null>(new Date());

  const handleChange = useCallback((date: Date) => {
    setDate(date);

    if (onChange) {
      onChange(date);
    }
  }, [onChange]);

  useEffect(() => {
    if (defaultDate) {
      setDate(defaultDate);
    }
  }, [defaultDate]);

  return (
    <div>
      <RDatePicker
        selected={date}
        dateFormat="MMM dd, yyyy"
        css={[
          tw`h-12 !border !border-gray4 !border-solid rounded-lg outline-none text-gray3`,
          !icon && tw`pl-4`,
          icon && tw`pl-14`,
          fullWidth && tw`w-full`,
        ]}
        customInput={<CalendarInput icon={icon} fullWidth={fullWidth} />}
        popperClassName="w-full max-w-calendar"
        popperPlacement="bottom-start"
        wrapperClassName={fullWidth ? `w-full` : `w-auto`}
        onChange={handleChange}
        formatWeekDay={CalendarWeekDay}
        renderDayContents={CalendarDayContents}
        renderCustomHeader={CalendarHead}
        calendarContainer={CalendarContainer}
        showPreviousMonths
        {...otherProps}
      />
    </div>
  );
}

export default DatePicker;
