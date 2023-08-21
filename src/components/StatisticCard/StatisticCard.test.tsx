import { render, screen } from '@testing-library/react';

// Components
import StatisticCard from './StatisticCard';

// Utils
import { formatNumberToCurrency } from '@/utils';

describe('StatisticCard', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <StatisticCard
        title="Title"
        todayValue={9000}
        yesterdayValue={12000}
        lastWeekValue={50000}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should render statistic card', () => {
    const todayValue = 10000;
    render(
      <StatisticCard
        title="Title"
        todayValue={todayValue}
        yesterdayValue={12000}
        lastWeekValue={50000}
      />
    );
    const statisticCard = screen.getByTestId('statistic-card');
    const statisticCardTitle = screen.getByText('Title');
    const statisticCardTodayValue = screen.getByText(
      formatNumberToCurrency(todayValue),
    );
    expect(statisticCard).toBeInTheDocument();
    expect(statisticCardTitle).toBeInTheDocument();
    expect(statisticCardTodayValue).toBeInTheDocument();
  });

  it('should render statistic card with down arrow if today value less then yesterday value', () => {
    render(
      <StatisticCard
        title="Title"
        todayValue={9000}
        yesterdayValue={12000}
        lastWeekValue={50000}
      />
    );
    const statisticCardArrow = screen.getByTestId('arrow-down');
    expect(statisticCardArrow).toBeInTheDocument();
  });

  it('should render statistic card with down arrow if today value more then yesterday value', () => {
    render(
      <StatisticCard
        title="Title"
        todayValue={14000}
        yesterdayValue={12000}
        lastWeekValue={50000}
      />
    );
    const statisticCardArrow = screen.getByTestId('arrow-up');
    expect(statisticCardArrow).toBeInTheDocument();
  });
});

