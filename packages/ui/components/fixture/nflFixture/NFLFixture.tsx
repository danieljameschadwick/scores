import React from "react";
import { View } from "react-native";
import StyleSheet from "react-native-media-query";
import { FixtureStrip } from "@scores/ui/components/fixture/layout/fixtureStrip/FixtureStrip";
import { DivisionTablePanel } from "@scores/ui/components/layout/panel/fixture/nfl/DivisionTablePanel";
import { FixtureStatisticsPanel } from "@scores/ui/components/fixture/nflFixture/statisticsPanel/FixtureStatisticsPanel";
import { TeamStatisticsPanel } from "./teamStatisticsPanel/TeamStatisticsPanel";

const falconsPassingData = [
  {
    name: "M. Mariota",
    attempts: "13/20",
    yards: 229,
    touchdowns: 1,
    interceptions: 1,
    sacks: "3-22",
    qbr: "36.7",
  },
];

const seahawksPassingData = [
  {
    name: "G. Smith",
    attempts: "32/44",
    yards: 325,
    touchdowns: 2,
    interceptions: 1,
    sacks: "2-17",
    qbr: "57.3",
  },
];

export const NFLFixture = () => {
  return (
    <>
      <View style={[styles.container]}>
        <FixtureStrip />
      </View>

      <View style={[styles.pageContent]} dataSet={{ media: ids.pageContent }}>
        <View style={[styles.mainContent]} dataSet={{ media: ids.mainContent }}>
          <FixtureStatisticsPanel />

          <View
            style={[styles.splitContainer]}
            dataSet={{ media: ids.splitContainer }}
          >
            <TeamStatisticsPanel
              title={"Seahawks Statistics"}
              passingData={seahawksPassingData}
            />
            <TeamStatisticsPanel
              title={"Falcons Statistics"}
              passingData={falconsPassingData}
            />
          </View>
        </View>

        <View style={[styles.sidebar]} dataSet={{ media: ids.sidebar }}>
          <DivisionTablePanel league={1} conference={1} division={2} />
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
  splitContainer: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    marginVertical: -4,
    marginHorizontal: -4,
    "@media (max-width: 730px)": {
      flexDirection: "column",
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
