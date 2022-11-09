import parseISO from "date-fns/parseISO";
import { GAME_RESULT } from "@scores/types/enum/GameResult";
import { Statistic } from "@scores/types/enum/Statistic";
import { StatisticDisplayOrder } from "@scores/types/maps/StatisticDisplayOrder";
import { Game } from "@scores/types/enum/Game";

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
export const normaliseScores = (data: any, game: Game): {} => {
  switch (game) {
    case Game.FOOTBALL:
      return normaliseFootballByDate(data);

    case Game.NFL:
      return normaliseNFLByDate(data);

    case Game.NBA:
      return normaliseNBA(data);
  }

  throw new Error(`Invalid gameType passed: ${game}`);
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

const normaliseNBA = (data) => {
  // @TODO: implement

  throw new Error('NotImplementedError');
};

const normaliseNFLByDate = (data): {} => {
  const { response } = data;
  // @TODO: refactor as map? key by date?
  const scoresByDate = {};

  for (const game of response) {
    const { game: { date: { date } } } = game;
    const startOfDay = parseISO(date).setUTCHours(0, 0, 0, 0);

    if (!scoresByDate[startOfDay]) {
      scoresByDate[startOfDay] = [];
    }

    scoresByDate[startOfDay].push(normaliseNFL(game));
  }

  return scoresByDate;
};

const normaliseNFL = (game) => {
  const {
    game: {
      id,
      date,
      status: {
        short: shortStatus
      },
      referee,
      venue,
    },
    scores: {
      home: {
        total: homeScore,
      },
      away: {
        total: awayScore,
      },
    },
    teams: { home: homeTeam, away: awayTeam },
    events,
    statistics,
  } = game;

  const home = normaliseTeam(homeTeam, homeScore, awayScore, true);
  const away = normaliseTeam(awayTeam, homeScore, awayScore, false);

  return {
    id: id,
    home: createScoreDTO(home, homeScore),
    away: createScoreDTO(away, awayScore),
    date: date,
    status: shortStatus,
    events: normaliseEvents(home.id, away.id, events),
    statistics: normaliseStatistics(home.id, away.id, statistics),
    referee,
    venue,
  };
};

const normaliseTeam = (team, homeScore: number, awayScore: number, isHome: boolean) => {
  const winner = normaliseResult(homeScore, awayScore, isHome);

  return {
    ...team,
    winner,
  };
};

const normaliseResult = (homeScore: number, awayScore: number, isHome: boolean) => {
  if (isHome) {
    if (homeScore > awayScore) return true;
    if (homeScore < awayScore) return false;

    return null;
  } else {
    if (homeScore < awayScore) return true;
    if (homeScore > awayScore) return false;

    return null;
  }
}

const createScoreDTO = (team: TeamInterface, score: string) => {
  const { name, abbreviation, winner, logo = null } = team;

  return {
    name,
    abbreviation,
    score,
    // @TODO: should flip this and only normalise where needed
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
