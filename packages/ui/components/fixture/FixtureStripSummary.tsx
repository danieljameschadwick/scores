import React from "react";
import { View, Text } from "react-native";
import StyleSheet from "react-native-media-query";
import { getTheme } from "@scores/theme/utils/theme";
import { useFixture } from "@scores/ui/components/fixture/FixtureContext";

enum EVENT_TYPE {
  GOAL = "goal",
}

// @TODO: hook into summary
const getEventIcon = (type: EVENT_TYPE) => {
  if (type === EVENT_TYPE.GOAL) {
    // return <Icon id="goal" />
  }

  return null;
};

export const FixtureStripSummary = () => {
  const fixture = useFixture();
  const themeStyles = getTheme();

  const {
    statistics: { homeStatistics = [], awayStatistics = [] } = {
      homeStatistics: [],
      awayStatistics: [],
    },
  } = fixture;

  if (homeStatistics.length === 0 && awayStatistics.length === 0) {
    return null;
  }

  return (
    <View style={[styles.container, themeStyles.darkContainer]}>
      <View>
        {awayStatistics
          .filter(({ type }) => type === "Goal")
          .map(({ time, player, type }) => {
            return (
              <Text style={[themeStyles.text]}>
                {`${player.name} (${time.elapsed}")`}
              </Text>
            );
          })}
      </View>

      <View
        style={[styles.splitContainer]}
        dataSet={{ media: ids.splitContainer }}
      />

      <View>
        {homeStatistics
          .filter(({ type }) => type === "Goal")
          .map(({ time, player, type }) => {
            return (
              <Text style={[themeStyles.text]}>
                {`${player.name} (${time.elapsed}")`}
              </Text>
            );
          })}
      </View>
    </View>
  );
};

const { styles, ids } = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 15,
  },
  splitContainer: {
    width: 50,
    "@media (max-width: 667px)": {
      width: 25,
    },
  },
});
