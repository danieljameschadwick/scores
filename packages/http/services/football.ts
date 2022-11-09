import footballFixtures20220829 from "@scores/http/mocks/footballFixtures-2022-08-29";
import footballFixtures20220905 from "@scores/http/mocks/footballFixtures-2022-09-05";
import footballFixtures20220911 from "@scores/http/mocks/nflFixtures-2022-09-11";
import { Game } from "@scores/types/enum/Game";
import { Month } from "@scores/types/enum/Month";
import { GameInterface } from "@scores/types/interfaces/GameInterface";

/**
 * Unnecessary async, but implementation will be
 * asynchronous when hooked to an API.
 */

interface FixturesResponse {
  response: GameInterface[],
};

export const getFixtures = async (month = Month.AUGUST, game = Game.FOOTBALL): Promise<FixturesResponse> => {
  if (game === Game.FOOTBALL) {
    if (month === Month.SEPTEMBER) {
      return footballFixtures20220905;
    }
  
    return footballFixtures20220829;
  }

  if (game === Game.NFL) {
    return footballFixtures20220911;
  }
};

export const getFixture = async (id: number): Promise<GameInterface | null> => {
  return footballFixtures20220829.response.find(({ fixture }) => fixture.id === id) ?? 
    footballFixtures20220905.response.find(({ fixture }) => fixture.id === id)
  ;
};
