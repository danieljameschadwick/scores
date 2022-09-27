import { Statistic } from "../enum/Statistic";

export const StatisticDisplayOrder = {
  [Statistic.FOULS]: 0,
  [Statistic.YELLOW_CARDS]: 10,
  [Statistic.RED_CARDS]: 20,
  [Statistic.OFFSIDES]: 30,
  [Statistic.CORNER_KICKS]: 40,
  [Statistic.GOALKEEPER_SAVES]: 50,
};
