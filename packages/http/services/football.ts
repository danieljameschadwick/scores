import footballFixtures from "@scores/http/mocks/footballFixtures";
import { GameInterface } from "@scores/types/interfaces/GameInterface";

/**
 * Unnecessary async, but implementation will be
 * asynchronous when hooked to an API.
 */

interface FixturesResponse {
  response: GameInterface[],
};

export const getFixtures = async (): Promise<FixturesResponse> => {
  return footballFixtures;
};

export const getFixture = async (id: number): Promise<GameInterface | null> => {
  return footballFixtures.response.find(({ fixture }) => fixture.id === id);
};
