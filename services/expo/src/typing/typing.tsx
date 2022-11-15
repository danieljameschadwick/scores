import { GameType } from "@scores/types/enum/GameType";

export type RootStackParamList = {
  Index: undefined;
  Fixture: { id: number, gameType: GameType };
  Login: undefined;
  Settings: undefined;
};
