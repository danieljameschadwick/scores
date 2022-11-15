import parseISO from "date-fns/parseISO";
import { GAME_RESULT } from "@scores/types/enum/GameResult";
import { GameType } from "@scores/types/enum/GameType";
import { normaliseFootballStatistics } from "./normaliseFootballStatistics";
import { normaliseNFLStatistics } from "./normaliseNFLStatistics";

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
export const normaliseScores = (data: any, game: GameType): {} => {
  switch (game) {
    case GameType.FOOTBALL:
      return normaliseFootballByDate(data);

    case GameType.NFL:
      return normaliseNFLByDate(data);

    case GameType.NBA:
      return normaliseNBAByDate(data);
  }

  throw new Error(`Invalid gameType passed: ${game}`);
};

export const normaliseScore = (game: GameType, gameType: GameType) => {
  switch (gameType) {
    case GameType.FOOTBALL:
      return normaliseFootball(game);

    case GameType.NFL:
      return normaliseNFL(game);

    case GameType.NBA:
      return normaliseNBA(game);
  }

  throw new Error(`Invalid gameType passed: ${gameType}`);
}

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
    id,
    gameType: GameType.FOOTBALL,
    home: createScoreDTO(home, goals.home),
    away: createScoreDTO(away, goals.away),
    date: date,
    status: shortStatus,
    events: normaliseEvents(home.id, away.id, events),
    statistics: normaliseFootballStatistics(home.id, away.id, statistics),
    referee,
    venue,
  };
}

const normaliseNBAByDate = (data) => {
  // @TODO: implement

  throw new Error('NotImplementedError');
};

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
      date: { date },
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
    id,
    gameType: GameType.NFL,
    home: createScoreDTO(home, homeScore),
    away: createScoreDTO(away, awayScore),
    date: date,
    status: shortStatus,
    events: normaliseEvents(home.id, away.id, events),
    statistics: normaliseNFLStatistics(home.id, away.id, statistics),
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
