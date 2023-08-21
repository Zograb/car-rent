import tw from 'twin.macro';


// Components
import { DatePicker } from '@/components/common/DatePicker';

export interface EarningSummaryHeadProps {
  startDate: Date;
  endDate: Date;
  minDate: Date;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
}

const EarningSummaryHead = ({
  startDate,
  endDate,
  minDate,
  setStartDate,
  setEndDate,
}: EarningSummaryHeadProps) => {
  return (
    <div
      css={[
        tw`mb-6 text-sm`,
        tw`block justify-between items-center md:flex`,
      ]}
      data-testid="earning-summary-head"
    >
      <div tw="block justify-start items-center md:flex">
        <div tw="font-semibold mr-8 text-base">Earning Summary</div>
        <div tw="block justify-start items-center my-2 sm:flex md:my-0">
          <div tw="flex justify-start items-center">
            <div tw="mr-2 w-10 sm:w-auto">from:</div>
            <DatePicker
              css={[
                tw`border !border-primary/60 border-solid`,
                tw`w-28 p-0 h-auto text-center rounded`,
              ]}
              minDate={minDate}
              defaultDate={startDate}
              onChange={setStartDate}
            />
          </div>
          <div tw="flex justify-start items-center mt-3 sm:(ml-2 mt-0)">
            <div tw="mr-2 w-10 sm:w-auto">to:</div>
            <DatePicker
              css={[
                tw`w-28 p-0 h-auto text-center`,
                tw` border !border-primary/60 rounded border-solid`,
              ]}
              defaultDate={endDate}
              onChange={setEndDate}
            />
          </div>
        </div>
      </div>
      <div tw="flex justify-start items-center md:justify-end">
        <div tw="border-t-2 border-dashed border-gray3 w-4 h-px" />
        <div tw="ml-2 text-gray3">Same period last year</div>
      </div>
    </div>
  );
}

export default EarningSummaryHead;
