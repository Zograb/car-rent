import type { FC } from 'react';
import {
  type CalendarContainerProps,
  CalendarContainer as DatePickerCalendarContainer,
} from 'react-datepicker';
import 'twin.macro';

const CalendarContainer: FC<CalendarContainerProps> = ({
  className,
  children,
}) => {
  return (
    <div data-testid="date-picker-container">
      <DatePickerCalendarContainer
        tw="border-none shadow-date-picker w-full"
        className={className}
      >
        {children}
      </DatePickerCalendarContainer>
    </div>
  );
}

export default CalendarContainer;
