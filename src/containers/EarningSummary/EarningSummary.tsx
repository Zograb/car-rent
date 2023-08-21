import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  format,
  isAfter,
  isSameDay,
  isSameMonth,
  isBefore,
  startOfYear,
  subMonths,
  subYears,
} from 'date-fns';
import 'twin.macro';

// Components
import { LineChart, Section } from '@/components';
import { CustomTooltip, EarningSummaryHead } from '@/components/EarningSummary';

// Utils
import { formatNumberToCurrency, COLORS } from '@/utils';

// Store
import { useStore } from '@/store';

export const EarningSummary = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [minDate, setMinDate] = useState<Date>(new Date());

  const summary = useStore.use.summary();

  const selectedData = useMemo(() => {
    // Filter data to fit in date range
    const dataFiltered = summary.filter((item) => (
      (isAfter(item.date, startDate) && isBefore(item.date, endDate)) ||
        isSameDay(item.date, startDate)
    ));

    // Set previous year data
    const dataWithPreviousYear = dataFiltered.map((item) => {
      const previousYearItem = summary.find(
        (dataItem) => isSameMonth(dataItem.date, subYears(item.date, 1)),
      );
      return {
        ...item,
        previousYearValue: previousYearItem?.value || null,
      }
    });

    return dataWithPreviousYear;
  }, [startDate, endDate, summary]);

  const yAxiosTickFormatter = useCallback((value: number) => (
    formatNumberToCurrency(
      value,
      {
        notation: 'compact'
      },
    )
  ), []);

  const xAxiosTickFormatter = useCallback((value: Date) => (
    format(value, 'MMM')
  ), []);

  const tooltipFormatter = useCallback((value: number): string => (
    formatNumberToCurrency(
      value,
      {
        notation: 'compact'
      },
    )
  ), []);

  useEffect(() => {
    const sixMonthAgoDate = subMonths(new Date(), 6);
    const yearStartDate = startOfYear(new Date());
    setMinDate(yearStartDate);
    if (isBefore(sixMonthAgoDate, yearStartDate)) {
      setStartDate(yearStartDate);
    }
    else {
      setStartDate(sixMonthAgoDate);
    }
  }, []);

  return (
    <Section>
      <EarningSummaryHead
        {...{
          startDate,
          endDate,
          minDate,
          setStartDate,
          setEndDate,
        }}
      />
      <LineChart
        data={selectedData}
        labelsDataKey="date"
        lines={[
          { key: 'value', drawAreaGradient: true, color: COLORS['primary'] },
          {
            key: 'previousYearValue',
            drawAreaGradient: false,
            dashed: true,
            color: COLORS['gray3'],
          },
        ]}
        yAxisProps={{
          tickFormatter: yAxiosTickFormatter,
        }}
        xAxisProps={{
          tickFormatter: xAxiosTickFormatter,
        }}
        tooltipProps={{
          formatter: tooltipFormatter,
          content: <CustomTooltip />
        }}
      />
    </Section>
  );
}
