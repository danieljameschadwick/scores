import footballFixtures from "@scores/http/mocks/footballFixtures";

/**
 * Unnecessary async, but implementation will be
 * asynchronous when hooked to an API.
 */
export const getFixtures = async () => {
  return footballFixtures;
};
