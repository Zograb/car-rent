import { useCallback, useEffect, useRef } from 'react';

// Utils
import { getBreakpointValue } from '@/utils';

export interface UseBreakpointTriggerOptions {
  breakpoint: string;
  condition?: 'below' | 'above' | 'equal';
  triggerFn: () => void;
}

export const useBreakpointTrigger = ({
  breakpoint,
  condition = 'below',
  triggerFn,
}: UseBreakpointTriggerOptions) => {
  const triggeredRef = useRef<boolean>(false);

  const windowSizeListener = useCallback(() => {
    const currentBreakpointValue = getBreakpointValue(breakpoint);

    // Trigger function if window inner width is less then breakpoint width
    if (condition === 'below') {
      if (
        window.innerWidth < currentBreakpointValue &&
        !triggeredRef.current
      ) {
        triggerFn();
        triggeredRef.current = true;
      } else if (
        window.innerWidth > currentBreakpointValue &&
        triggeredRef.current
      ) {
        triggeredRef.current = false;
      }
    }

    // Trigger function if window inner width is equal to breakpoint width
    if (condition === 'equal') {
      if (
        window.innerWidth === currentBreakpointValue &&
        !triggeredRef.current
      ) {
        triggerFn();
        triggeredRef.current = true;
      } else if (
        window.innerWidth !== currentBreakpointValue &&
        triggeredRef.current
      ) {
        triggeredRef.current = false;
      }
    }

    // Trigger function if window inner width is more then breakpoint width
    if (condition === 'above') {
      if (
        window.innerWidth > currentBreakpointValue &&
        !triggeredRef.current
      ) {
        triggerFn();
        triggeredRef.current = true;
      } else if (
        window.innerWidth < currentBreakpointValue &&
        triggeredRef.current
      ) {
        triggeredRef.current = false;
      }
    }
  }, [breakpoint, condition, triggerFn]);

  useEffect(() => {
    triggeredRef.current = false;

    windowSizeListener();

    window.addEventListener('resize', windowSizeListener);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', windowSizeListener);
    }
  }, [windowSizeListener]);
}
