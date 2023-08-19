import { type ReactNode, forwardRef } from 'react';
import tw from 'twin.macro';

interface CalendarInputProps {
  fullWidth?: boolean;
  icon?: ReactNode;
}

const CalendarInput = forwardRef<HTMLDivElement, CalendarInputProps>((
  {
    icon,
    fullWidth,
    ...otherProps
  },
  ref
) => (
  <div
    css={[
      tw`relative inline-block`,
      fullWidth && tw`w-full`,
    ]}
    ref={ref}
  >
    <div tw="absolute top-1/2 left-4 -translate-y-1/2 text-2xl text-gray3">
      {icon}
    </div>
    <input {...otherProps} />
  </div>
));

export default CalendarInput;
