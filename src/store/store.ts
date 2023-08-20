import { create } from 'zustand';

import { createSelectors } from './createSelectors';
import { type CoreState, createCoreSlice } from './coreSlice';
import { type EarningsState, createEarningsSlice } from './earningsSlice';

export type State = CoreState & EarningsState;

export const useStoreBase = create<State>((...a) => ({
  ...createCoreSlice(...a),
  ...createEarningsSlice(...a),
}));

export const useStore = createSelectors(useStoreBase);
