import format from 'date-fns/format';
import tw from 'twin.macro';

// Components
import { StatisticCard } from '@/components/StatisticCard';
import { StatisticChart } from '@/components/StatisticChart';

const data = [
  {
    name: 'Total Hired',
    value: 460,
    color: '#006AFF',
  },
  {
    name: 'Total Canceled',
    value: 230,
    color: '#52C93F',
  },
  {
    name: 'Total Pending',
    value: 150,
    color: '#FF2727',
  },
];

export const TodayStatistics = () => (
  <div
    css={[
      tw`xl:(w-dashboardColumn h-full min-h-screen)`,
      tw`bg-floralWhite px-4 py-7 sm:px-8`,
    ]}
  >
    <div tw="font-medium text-xl text-gray2">
      Todays Statistics
    </div>
    <div tw="text-sm text-gray3">
      {format(new Date(), 'eee, dd MMM, yyyy, hh.mm aa')}
    </div>
    <div
      css={[
        tw`grid grid-cols-1 gap-y-4 mt-4`,
        tw`lg:(grid-cols-3 gap-x-4)`,
        tw`xl:(grid-cols-1 gap-y-4)`,
      ]}
    >
      <StatisticCard
        title="Income"
        todayValue={9460}
        yesterdayValue={9940}
        lastWeekValue={25658}
      />
      <StatisticCard
        title="Expences"
        todayValue={6360}
        yesterdayValue={4200}
        lastWeekValue={32065}
      />
      <StatisticChart data={data} />
    </div>
  </div>
);
