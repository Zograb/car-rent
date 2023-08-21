'use client';

import 'twin.macro';

import {
  CarAvailablity,
  EarningSummary,
  LiveCarStatus,
  TodayStatistics,
} from '@/containers';

const RootPage = () => {
  return (
    <div tw="block grid-cols-dashboard xl:grid">
      <TodayStatistics />
      <div tw="px-4 pb-12 overflow-hidden sm:px-7 lg:pb-0">
        <CarAvailablity />
        <LiveCarStatus />
        <EarningSummary />
      </div>
    </div>
  );
}

export default RootPage;
