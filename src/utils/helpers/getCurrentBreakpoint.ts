import { SCREENS } from '@/constants/tailwindConfig';

export const getBreakpointValue = (value: string): number =>
  parseInt(SCREENS[value].replace('px', ''), 10);

export const getCurrentBreakpoint = (width?: number): string => {
  let currentBreakpoint = '';
  let biggestBreakpointValue = 0;
  for (const breakpoint of Object.keys(SCREENS)) {
    const breakpointValue = getBreakpointValue(breakpoint);
    if (
      breakpointValue > biggestBreakpointValue &&
      (width || window.innerWidth) >= breakpointValue
    ) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint;
    }
  }
  return currentBreakpoint;
};
