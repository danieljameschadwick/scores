import React from "react";
import { View } from "react-native";
import StyleSheet from "react-native-media-query";
import { FixtureStrip } from "@scores/ui/components/fixture/layout/fixtureStrip/FixtureStrip";
import { FixtureStatisticsPanel } from "@scores/ui/components/fixture/footballFixture/statisticsPanel/FixtureStatisticsPanel";
import { FixtureSplitStatisticsPanel } from "@scores/ui/components/fixture/footballFixture/splitStatisticsPanel/FixtureSplitStatisticsPanel";
import { FixtureGameInformationPanel } from "@scores/ui/components/fixture/footballFixture/gameInformation/FixtureGameInformationPanel";
import { LeagueTablePanel } from "@scores/ui/components/layout/panel/leagueTable/LeagueTablePanel";

export const FootballFixture = () => {
  return (
    <>
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
    </>
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
