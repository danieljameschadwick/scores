import React from "react";
import { Text, View } from "react-native";
import StyleSheet from "react-native-media-query";
import { useTheme } from "@scores/theme/utils/theme";
import { useFixture } from "../../../../state/FixtureContext";
import { ShotChart } from "./ShotChart";

export const ShotsStatistic = () => {
  const themeStyles = useTheme();
  const fixture = useFixture();
  const { home, away, statistics } = fixture;

  const homeShots = {
    shots: 10,
    shotsOnTarget: 6,
  };

  const awayShots = {
    shots: 16,
    shotsOnTarget: 3,
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
            shots={10}
            shotsOnTarget={6}
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
            shots={16}
            shotsOnTarget={3}
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
