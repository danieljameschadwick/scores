import React from "react";
import { Text, View } from "react-native";
import StyleSheet from "react-native-media-query";
import { useTheme } from "@scores/theme/utils/theme";
import { Statistic } from "@scores/types/enum/Statistic";
import { useFixture } from "@scores/ui/state/FixtureContext";
import { ShotChart } from "./ShotChart";

export const ShotsStatistic = () => {
  const themeStyles = useTheme();
  const fixture = useFixture();
  const { statistics } = fixture;

  const { homeValue: homeOnTarget, awayValue: awayOnTarget } =
    statistics[Statistic.SHOTS_ON_TARGET];
  const { homeValue: homeTotal, awayValue: awayTotal } =
    statistics[Statistic.TOTAL_SHOTS];

  const homeShots = {
    shots: homeTotal,
    shotsOnTarget: homeOnTarget,
  };

  const awayShots = {
    shots: awayTotal,
    shotsOnTarget: awayOnTarget,
  };

  const maxShots =
    homeShots.shots > awayShots.shots ? homeShots.shots : awayShots.shots;

  return (
    <View style={[styles.container]}>
      <View style={[styles.titleContainer]}>
        <Text style={[styles.titleText, themeStyles.text]}>Shots</Text>
      </View>

      <View style={[styles.chartsContainer]}>
        <View
          style={[styles.chartContainer]}
          dataSet={{ media: ids.chartContainer }}
        >
          <ShotChart
            shots={homeShots.shots}
            shotsOnTarget={homeShots.shotsOnTarget}
            maxShots={maxShots}
            color={"#DA020E"}
          />
        </View>

        <View style={[styles.divider]} />

        <View
          style={[styles.chartContainer]}
          dataSet={{ media: ids.chartContainer }}
        >
          <ShotChart
            shots={awayShots.shots}
            shotsOnTarget={awayShots.shotsOnTarget}
            maxShots={maxShots}
            color={"#000000"}
            reverse={true}
          />
        </View>
      </View>
    </View>
  );
};

const { ids, styles } = StyleSheet.create({
  // @TODO: this container isn't growing with the content
  container: {
    display: "flex",
    flexDirection: "column",
  },
  titleContainer: {
    marginBottom: 5,
  },
  titleText: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  chartsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  chartContainer: {
    display: "flex",
    flexDirection: "row",
    height: 200,
    width: 200,
    "@media (max-width: 667px)": {
      height: 90,
      width: 90,
    },
  },
  divider: {
    width: 10,
  },
});
