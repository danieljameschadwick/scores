import React from "react";
import { GameInterface } from "@scores/types/interfaces/GameInterface";
import { normaliseScore } from "@scores/http/utils/normaliseScores";
import { FixtureContext } from "@scores/ui/state/FixtureContext";
import { GameType } from "@scores/types/enum/GameType";
import { FootballFixture } from "./footballFixture/FootballFixture";
import { NFLFixture } from "./nflFixture/NFLFixture";

interface Props {
  fixture: GameInterface;
  gameType: string; // @TODO: GameType casted as string
}

export const Fixture: React.FC<Props> = ({ fixture, gameType }) => {
  // @TODO: we need to be GameType aware
  // is this where we diverge our fixtures?
  // const normalisedFixture = normaliseScore(fixture, gameType);

  return (
    // <FixtureContext.Provider value={normalisedFixture}>
    <FixtureContext.Provider value={fixture}>
      {/* // @TODO: replace with map? */}
      { gameType === GameType.FOOTBALL && <FootballFixture /> }
      { gameType === GameType.NFL && <NFLFixture /> }
    </FixtureContext.Provider>
  );
};
