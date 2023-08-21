import { useMemo, type FC } from 'react';
import { AiOutlineArrowDown } from '@react-icons/all-files/ai/AiOutlineArrowDown';
import { AiOutlineArrowUp } from '@react-icons/all-files/ai/AiOutlineArrowUp';
import tw from 'twin.macro';

// Utils
import { formatNumberToCurrency, getPercentageDifference } from '@/utils';

interface StatisticCardProps {
  // card title
  title: string;

  // today revenue
  todayValue: number;

  // yesterday revenue
  yesterdayValue: number;

  // last week revenue
  lastWeekValue: number;
}

const StatisticCard: FC<StatisticCardProps> = ({
  title,
  todayValue,
  yesterdayValue,
  lastWeekValue,
}) => {
  const percentageDifference: number = useMemo(() => {
    return getPercentageDifference(todayValue, yesterdayValue);
  }, [todayValue, yesterdayValue]);

  return (
    <div tw="bg-white p-6 rounded-lg shadow-md" data-testid="statistic-card">
      <div css={[
        tw`flex justify-between items-center`,
        tw`border-b border-solid border-gray-200`,
        tw`pb-3 text-gray3`,
      ]}>
        <div tw="font-medium text-lg">{title}</div>
        <div tw="bg-gray-100 py-1 px-2 rounded-sm text-xs">Today</div>
      </div>
      <div tw="flex justify-between items-end mt-3 mb-2">
        <div tw="text-black text-3xl font-bold">
          {formatNumberToCurrency(todayValue)}
        </div>
        <div
          css={[
            tw`flex justify-end items-center`,
            percentageDifference < 0 && tw`text-secondary`,
            percentageDifference > 0 && tw`text-green`,
          ]}
        >
          {percentageDifference < 0 && <AiOutlineArrowDown data-testid="arrow-down" />}
          {percentageDifference > 0 && <AiOutlineArrowUp data-testid="arrow-up" />}
          <span>{Math.abs(percentageDifference)}%</span>
        </div>
      </div>
      <div tw="text-sm text-gray3 font-light">
        Compared to ${yesterdayValue} yesterday
      </div>
      <div tw="text-sm text-gray2 font-medium mt-0.5 flex justify-between items-center">
        <div>Last week Income</div>
        <div>{formatNumberToCurrency(lastWeekValue)}</div>
      </div>
    </div>
  );
}

export default StatisticCard;
