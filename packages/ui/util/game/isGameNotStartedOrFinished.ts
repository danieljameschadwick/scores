import { GAME_STATUS } from "@scores/types/enum/GameStatus";

const notStartedOrFinishedKey = {
  [GAME_STATUS.NS]: true,
  [GAME_STATUS.TBD]: true,
  [GAME_STATUS.FT]: true,
  [GAME_STATUS.HT]: true,
  [GAME_STATUS.AET]: true,
  [GAME_STATUS.PEN]: true,
  [GAME_STATUS.SUSP]: true,
  [GAME_STATUS.INT]: true,
  [GAME_STATUS.PST]: true,
  [GAME_STATUS.CANC]: true,
  [GAME_STATUS.ABD]: true,
};

export const isGameNotStartedOrFinished = (status: GAME_STATUS) => {
  return notStartedOrFinishedKey[status] ?? false;
};
