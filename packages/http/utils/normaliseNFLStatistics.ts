
export const normaliseNFLStatistics = (homeId, awayId, statistics = []) => {
  let homeStatistics = null;
  let awayStatistics = null;

  for (const statistic of statistics) {
    const normalisedStatistic = normaliseStatistic(statistic);

    if (homeId === normalisedStatistic.teamId) {
      homeStatistics = normalisedStatistic;
    }

    if (awayId === normalisedStatistic.teamId) {
      awayStatistics = normalisedStatistic;
    }
  }

  if (!homeStatistics || !awayStatistics) {
    return {};
  }

  return combineNormalisedStatistics(homeStatistics, awayStatistics);
};

const normaliseStatistic = (statistic) => {
  const { team, statistics } = statistic;
  // @TODO: refactor as map for performance?
  const formattedStatistics = [];

  for (const [key, stat] of Object.entries(statistics)) {
    // @TODO: type
    const { total } = stat;
    const keyedType = keyifyType(key);

    formattedStatistics.push({
      id: keyedType,
      name: keyedType,
      value: total,
    });
  }

  return {
    teamId: team.id,
    statistics: formattedStatistics,
  };
}

// @TODO: probably not reusable as each API may have different keys
const keyifyType = (type: string): string => {
  const formattedSplitTypes = [];

  type.split('_').forEach((value) => {
    formattedSplitTypes.push(uppercaseFirstLetter(value));
  });

  return lowercaseFirstLetter(formattedSplitTypes.join(''));
}

// @TODO: should be reusable
const sanitiseValue = (value: string | number | null) => {
  if (!value) return 0;
  if (typeof value === 'number') return value;

  return Number(value.replace(/\D/g, ''));
}

const lowercaseFirstLetter = (string: string): string => {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

const uppercaseFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const combineNormalisedStatistics = (homeStatistics, awayStatistics) => {
  const combinedStatistics = {};

  for (const homeStatistic of homeStatistics.statistics) {
    const { id, name, value } = homeStatistic;
    combinedStatistics[id] = {
      id,
      name,
      homeValue: value,
    }
  }

  for (const awayStatistic of awayStatistics.statistics) {
    const { id, value } = awayStatistic;

    combinedStatistics[id].awayValue = value;
  }

  return combinedStatistics;
}
