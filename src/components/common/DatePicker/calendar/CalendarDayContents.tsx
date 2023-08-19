import { isToday } from 'date-fns';
import tw from 'twin.macro';

const CalendarDayContents = (dayOfMonth: number, date?: Date) => {
  const today = date && isToday(date);
  return (
    <div
      css={[
        tw`transition duration-200 text-black rounded w-7 h-7`,
        tw`flex justify-center items-center`,
        !today && tw`bg-white hover:bg-primary hover:text-white`,
        today && tw`bg-primary/20`,
      ]}
    >
      {dayOfMonth}
    </div>
  );
}

export default CalendarDayContents;
