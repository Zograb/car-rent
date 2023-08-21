import type { TooltipProps } from 'recharts';
import { useCallback, useMemo } from 'react';
import { format, subYears } from 'date-fns';
import 'twin.macro';

// Utils
import { formatNumberToCurrency } from '@/utils';

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  const formatEarningValue = useCallback((value?: number) => {
    if (value) {
      return formatNumberToCurrency(
        value,
        {
          notation: 'compact'
        },
      );
    }
    return 0;
  }, []);

  const value = useMemo(() => {
    if (payload?.length) {
      return payload.find((item) => item.dataKey === 'value');
    }
    return null;
  }, [payload]);

  if (active && value) {
    return (
      <div tw="bg-white/80 shadow rounded-sm p-2" data-testid="custom-tooltip">
        <p tw="text-lg">{format(label, 'MMMM')}</p>
        <p tw="font-light">
          {`${format(label, 'yyyy')}: ${formatEarningValue(value.value)}`}
        </p>
        <p tw="font-light">
          {`${format(subYears(label, 1), 'yyyy')}: ${
            formatEarningValue(value.payload?.previousYearValue)
          }`}
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
