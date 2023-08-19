import 'twin.macro';

const CalendarWeekDay = (day: string) => (
  <div tw="w-7">{day.slice(0, 3)}</div>
);

export default CalendarWeekDay;
