import type { StateCreator } from 'zustand';
import type { EarningSummary } from '@/types';

const summary = [
  { date: new Date(2022, 0, 31), value: 22200 },
  { date: new Date(2022, 1, 28), value: 43200 },
  { date: new Date(2022, 2, 31), value: 34000 },
  { date: new Date(2022, 3, 30), value: 19000 },
  { date: new Date(2022, 4, 31), value: 52000 },
  { date: new Date(2022, 5, 30), value: 32000 },
  { date: new Date(2022, 6, 31), value: 30000 },
  { date: new Date(2022, 7, 31), value: 60000 },
  { date: new Date(2022, 8, 30), value: 25000 },
  { date: new Date(2022, 9, 31), value: 45000 },
  { date: new Date(2022, 10, 30), value: 20000 },
  { date: new Date(2022, 11, 31), value: 22000 },
  { date: new Date(2023, 0, 31), value: 25000 },
  { date: new Date(2023, 1, 28), value: 15000 },
  { date: new Date(2023, 2, 31), value: 40000 },
  { date: new Date(2023, 3, 30), value: 32000 },
  { date: new Date(2023, 4, 31), value: 25000 },
  { date: new Date(2023, 5, 30), value: 45000 },
];

export interface EarningsState {
  summary: EarningSummary[];
}

export const createEarningsSlice: StateCreator<EarningsState> =
  (): EarningsState => ({
    summary,
  });
