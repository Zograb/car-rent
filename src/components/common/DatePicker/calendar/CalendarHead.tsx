import type { FC } from 'react';
import type { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import { format } from 'date-fns';
import { AiOutlineLeft } from '@react-icons/all-files/ai/AiOutlineLeft';
import { AiOutlineRight } from '@react-icons/all-files/ai/AiOutlineRight';
import tw from 'twin.macro';

const CalendarHead: FC<ReactDatePickerCustomHeaderProps> = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => (
  <div tw="flex justify-between items-center px-3 pb-2 text-xl">
    <button
      css={[
        tw`text-xl`,
        prevMonthButtonDisabled && tw`pointer-events-none opacity-20`
      ]}
      onClick={decreaseMonth}
    >
      <AiOutlineLeft />
    </button>
    <div>{format(date, 'MMMM')}</div>
    <button
      css={[
        tw`text-xl`,
        nextMonthButtonDisabled && tw`pointer-events-none opacity-75`,
      ]}
      onClick={increaseMonth}
    >
      <AiOutlineRight />
    </button>
  </div>
);

export default CalendarHead;
