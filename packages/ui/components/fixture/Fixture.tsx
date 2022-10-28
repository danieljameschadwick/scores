import React from "react";
import { View } from "react-native";
import StyleSheet from "react-native-media-query";
import { GameInterface } from "@scores/types/interfaces/GameInterface";
import { normaliseFootball } from "@scores/http/utils/normaliseScores";
import { FixtureStrip } from "@scores/ui/components/fixture/fixtureStrip/FixtureStrip";
import { FixtureContext } from "@scores/ui/state/FixtureContext";
import { FixtureStatisticsPanel } from "@scores/ui/components/fixture/statisticsPanel/FixtureStatisticsPanel";
import { FixtureSplitStatisticsPanel } from "./splitStatisticsPanel/FixtureSplitStatisticsPanel";
import { FixtureGameInformationPanel } from "./gameInformation/FixtureGameInformationPanel";
import { LeagueTablePanel } from "../layout/panel/leagueTable/LeagueTablePanel";

interface Props {
  fixture: GameInterface;
}

export const Fixture: React.FC<Props> = ({ fixture }) => {
  return (
    <FixtureContext.Provider value={normaliseFootball(fixture)}>
      <View style={[styles.container]}>
        <FixtureStrip />
      </View>

      <View style={[styles.pageContent]} dataSet={{ media: ids.pageContent }}>
        <View style={[styles.mainContent]} dataSet={{ media: ids.mainContent }}>
          <FixtureStatisticsPanel />
          <FixtureSplitStatisticsPanel />
          <FixtureGameInformationPanel />
        </View>

        <View style={[styles.sidebar]} dataSet={{ media: ids.sidebar }}>
          <LeagueTablePanel league={1} />
        </View>
      </View>
    </FixtureContext.Provider>
  );
};

const { styles, ids } = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  pageContent: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    marginTop: 15,
    marginHorizontal: "auto",
    "@media (max-width: 990px)": {
      width: "100%",
      paddingHorizontal: 15,
    },
  },
  mainContent: {
    width: 660,
    paddingHorizontal: 10,
    "@media (max-width: 990px)": {
      width: "100%",
    },
  },
  sidebar: {
    width: 330,
    paddingHorizontal: 10,
    "@media (max-width: 990px)": {
      display: "none",
    },
  },
});
