import { GAME_STATUS } from "@scores/types/enum/GameStatus";

enum GAME_STATUS_FORMATTED {
  LIVE = "LIVE",
};

/**
 * We only care about certain status codes whilst live, which are cast here
 */
const gameStatusKey = {
  [GAME_STATUS.NS]: GAME_STATUS.NS,
  [GAME_STATUS.TBD]: GAME_STATUS.TBD,
  [GAME_STATUS.FT]: GAME_STATUS.FT,
  [GAME_STATUS.HT]: GAME_STATUS.HT,
  [GAME_STATUS.AET]: GAME_STATUS.AET,
  [GAME_STATUS.INT]: GAME_STATUS.INT,
  [GAME_STATUS.PEN]: GAME_STATUS.FT,
  [GAME_STATUS.SUSP]: GAME_STATUS.SUSP,
  [GAME_STATUS.INT]: GAME_STATUS.INT,
  [GAME_STATUS.PST]: GAME_STATUS.PST,
  [GAME_STATUS.CANC]: GAME_STATUS.CANC,
  [GAME_STATUS.ABD]: GAME_STATUS.ABD,
};

export const getFormattedLiveMatchStatus = (status: GAME_STATUS) => {
  return gameStatusKey[status] ?? GAME_STATUS_FORMATTED.LIVE;
};
