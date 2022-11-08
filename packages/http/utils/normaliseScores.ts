import parseISO from "date-fns/parseISO";
import { GAME_RESULT } from "@scores/types/enum/GameResult";
import { GAME_TYPE } from "@scores/types/enum/GameType";
import { Statistic } from "@scores/types/enum/Statistic";
import { StatisticDisplayOrder } from "@scores/types/maps/StatisticDisplayOrder";

interface TeamInterface {
  name: string;
  abbreviation: string;
  winner: boolean | null;
  logo?: string | null;
}

/**
 * normaliseScores
 * 
 * Normalising data to the same format so we can use the same
 * types across different sports and reuse the same components.
 * 
 * This will be replaced with an API when we noramlise data in 
 * the backend as it can be ingested from many 3rd party APIs.
 */
export const normaliseScores = (data: any, gameType: GAME_TYPE): {} => {
  switch (gameType) {
    case GAME_TYPE.FOOTBALL:
      return normaliseFootballByDate(data);

    case GAME_TYPE.NBA:
      return normaliseNba(data);
  }

  throw new Error(`Invalid gameType passed: ${gameType}`);
};

const normaliseFootballByDate = (data): {} => {
  const { response } = data;
  // @TODO: refactor as map? key by date?
  const scoresByDate = {};

  for (const game of response) {
    const { fixture: { date } } = game;
    const startOfDay = parseISO(date).setUTCHours(0, 0, 0, 0);

    if (!scoresByDate[startOfDay]) {
      scoresByDate[startOfDay] = [];
    }

    scoresByDate[startOfDay].push(normaliseFootball(game));
  }

  return scoresByDate;
};

export const normaliseFootball = (game) => {
  const {
    fixture: {
      id,
      date,
      status: {
        short: shortStatus
      },
      referee,
      venue,
    },
    goals,
    teams: { home, away },
    events,
    statistics,
  } = game;

  return {
    id: id,
    home: createScoreDTO(home, goals.home),
    away: createScoreDTO(away, goals.away),
    date: date,
    status: shortStatus,
    events: normaliseEvents(home.id, away.id, events),
    statistics: normaliseStatistics(home.id, away.id, statistics),
    referee,
    venue,
  };
}

const normaliseNba = (data) => {
  // @TODO: implement

  throw new Error('NotImplementedError');
};

const createScoreDTO = (team: TeamInterface, score: string) => {
  const { name, abbreviation, winner, logo = null } = team;

  return {
    name,
    abbreviation,
    score,
    result: normaliseWinner(winner),
    logo,
  };
};

const normaliseWinner = (result: boolean | null) => {
  if (result === null) {
    return GAME_RESULT.DRAW;
  }

  return result
    ? GAME_RESULT.WIN
    : GAME_RESULT.LOSS;
};

const normaliseEvents = (homeId, awayId, events = []) => {
  // @TODO: refactor as map?
  const homeEvents = [];
  const awayEvents = [];

  for (const event of events) {
    const { team: { id } } = event;

    if (id === homeId) {
      homeEvents.push(event);
    }

    if (id === awayId) {
      awayEvents.push(event);
    }
  }

  return {
    homeEvents,
    awayEvents,
  };
};

const normaliseStatistics = (homeId, awayId, statistics = []) => {
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

  console.log(homeStatistics, awayStatistics);

  return combineNormalisedStatistics(homeStatistics, awayStatistics);
};

const normaliseStatistic = (statistic) => {
  const { team, statistics } = statistic;
  // @TODO: refactor as map for performance?
  const formattedStatistics = [];

  for (const stat of statistics) {
    const { type, value } = stat;
    const keyedType = keyifyType(type);

    formattedStatistics.push({
      id: keyedType,
      name: type,
      value: sanitiseValue(value),
    });
  }

  return {
    teamId: team.id,
    statistics: formattedStatistics,
  };
}


const keyifyType = (type: string): string => {
  return lowercaseFirstLetter(type.replace(/ /g, ''));
}

const sanitiseValue = (value: string | number | null) => {
  if (!value) return 0;
  if (typeof value === 'number') return value;

  return Number(value.replace(/\D/g, ''));
}

const lowercaseFirstLetter = (string: string): string => {
  return string.charAt(0).toLocaleLowerCase() + string.slice(1);
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
