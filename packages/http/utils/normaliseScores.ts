import parseISO from "date-fns/parseISO";
import { GAME_RESULT } from "@scores/types/enum/GameResult";
import { GAME_STATUS } from "@scores/types/enum/GameStatus";
import { GAME_TYPE } from "@scores/types/enum/GameType";

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
 * This will be replaced with an API when we cache data in 
 * the backend.
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
  const { fixture: { id, date }, goals, teams: { home, away }, statistics } = game;

  return {
    id: id,
    home: createScoreDTO(home, goals.home),
    away: createScoreDTO(away, goals.away),
    date: date,
    status: GAME_STATUS.FULL_TIME,
    statistics: normaliseStatistics(home.id, away.id, statistics),
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

const normaliseStatistics = (homeId, awayId, statistics = []) => {
  const homeStatistics = [];
  const awayStatistics = [];

  for (const statistic of statistics) {
    const { team: { id } } = statistic;

    if (id === homeId) {
      homeStatistics.push(statistic);
    }

    if (id === awayId) {
      awayStatistics.push(statistic);
    }
  }

  return {
    homeStatistics,
    awayStatistics,
  };
};
