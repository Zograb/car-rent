export const getPercentageDifference = (value1: number, value2: number): number => {
  const averageValue = (value1 + value2) / 2;
  const percentage = (value1 - value2) / averageValue * 100;
  return Math.round(percentage);
}
