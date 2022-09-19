import footballFixtures from "@scores/http/mocks/footballFixtures";

/**
 * Unnecessary async, but implementation will be
 * asynchronous when hooked to an API.
 */

export const getFixtures = async () => {
  return footballFixtures;
};

export const getFixture = async (id: number) => {
  return footballFixtures.response.find(({ fixture }) => fixture.id === id);
};
