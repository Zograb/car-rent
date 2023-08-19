export const formatNumberToCurrency = (
  value: number,
  options?: Intl.NumberFormatOptions,
): string => {
  const formattedNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
    maximumFractionDigits: 0,
    ...options,
  });

  return formattedNumber.format(value);
};
