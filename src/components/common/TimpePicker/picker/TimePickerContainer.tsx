import { FC } from 'react';
import {
  type CalendarContainerProps,
  CalendarContainer as DatePickerCalendarContainer,
} from 'react-datepicker';
import 'twin.macro';

const TimePickerContainer: FC<CalendarContainerProps> = ({
  className,
  children,
}) => {
  return (
    <DatePickerCalendarContainer
      className={className}
      tw="border-none shadow-date-picker"
    >
      {children}
    </DatePickerCalendarContainer>
  );
}

export default TimePickerContainer;
