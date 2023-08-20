import type { StateCreator } from 'zustand';

export interface CoreStateDefinition {
  menuOpen: boolean;
}

export interface CoreActions {
  updateMenuState: (menuState: boolean) => void;
}

export type CoreState = CoreStateDefinition & CoreActions;

export const createCoreSlice: StateCreator<CoreState> =
  (set): CoreState => ({
    menuOpen: true,
    updateMenuState: (menuOpen: boolean) => set(() => ({ menuOpen })),
  });
