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
    sacks: 3,
    qbr: "36.7",
  },
];

const falconsRushingData = [
  {
    name: "C. Patterson",
    carries: 17,
    yards: 141,
    touchdowns: 1,
  },
  {
    name: "T. Allgeier",
    carries: 6,
    yards: 25,
    touchdowns: 0,
  },
  {
    name: "A. Williams",
    carries: 1,
    yards: 9,
    touchdowns: 0,
  },
  {
    name: "M. Mariota",
    carries: 7,
    yards: 4,
    touchdowns: 1,
  },
];

const falconsReceivingData = [
  {
    name: "K. Pitts",
    receptions: 5,
    yards: 87,
    touchdowns: 0,
    targets: 8,
  },
  {
    name: "D. London",
    receptions: 3,
    yards: 54,
    touchdowns: 1,
    targets: 6,
  },
  {
    name: "O. Zaccheaus",
    receptions: 2,
    yards: 49,
    touchdowns: 0,
    targets: 2,
  },
  {
    name: "A. Firkser",
    receptions: 1,
    yards: 22,
    touchdowns: 0,
    targets: 1,
  },
  {
    name: "C. Patterson",
    receptions: 1,
    yards: 12,
    touchdowns: 0,
    targets: 1,
  },
];

const seahawksPassingData = [
  {
    name: "G. Smith",
    attempts: "32/44",
    yards: 325,
    touchdowns: 2,
    interceptions: 1,
    sacks: 2,
    qbr: "57.3",
  },
];

const seahawksRushingData = [
  {
    name: "R. Penny",
    carries: 14,
    yards: 66,
    touchdowns: 0,
  },
  {
    name: "D. Dallas",
    carries: 3,
    yards: 21,
    touchdowns: 0,
  },
  {
    name: "K. Walker III",
    carries: 3,
    yards: 19,
    touchdowns: 0,
  },
  {
    name: "T. Homer",
    carries: 1,
    yards: 7,
    touchdowns: 0,
  },
  {
    name: "G. Smith",
    carries: 2,
    yards: -1,
    touchdowns: 0,
  },
];

const seahawksReceivingData = [
  {
    name: "T. Lockett",
    receptions: 9,
    yards: 76,
    touchdowns: 0,
    targets: 11,
  },
  {
    name: "D. Metcalf",
    receptions: 5,
    yards: 64,
    touchdowns: 1,
    targets: 12,
  },
  {
    name: "C. Parkinson",
    receptions: 2,
    yards: 44,
    touchdowns: 0,
    targets: 2,
  },
  {
    name: "W. Dissly",
    receptions: 3,
    yards: 34,
    touchdowns: 1,
    targets: 3,
  },
  {
    name: "M. Goodwin",
    receptions: 2,
    yards: 31,
    touchdowns: 0,
    targets: 5,
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
              rushingData={seahawksRushingData}
              receivingData={seahawksReceivingData}
            />
            <TeamStatisticsPanel
              title={"Falcons Statistics"}
              passingData={falconsPassingData}
              rushingData={falconsRushingData}
              receivingData={falconsReceivingData}
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
