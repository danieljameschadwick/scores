import React from "react";
import { View, Text } from "react-native";
import StyleSheet from "react-native-media-query";
import format from "date-fns/format";
import { useTheme } from "@scores/theme/utils/theme";
import { useFixture } from "@scores/ui/state/FixtureContext";
import { FixtureStripScore } from "@scores/ui/components/fixture/layout/fixtureStrip/FixtureStripScore";

export const FixtureStripScores = () => {
  const fixture = useFixture();
  const themeStyles = useTheme();

  const { date, home, away, status } = fixture;

  return (
    <View style={[styles.container, themeStyles.lightContainer]}>
      <FixtureStripScore team={away} />

      <View
        style={[styles.statusContainer]}
        dataSet={{ media: ids.statusContainer }}
      >
        <Text style={[styles.statusText, themeStyles.text]}>{status}</Text>
        <Text
          style={[styles.dateText, themeStyles.text]}
          dataSet={{ media: ids.dateText }}
        >
          {format(new Date(date), "dd/MM/yyyy")}
        </Text>
      </View>

      <FixtureStripScore team={home} isHome={true} />
    </View>
  );
};

const { styles, ids } = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  statusContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
    "@media (max-width: 667px)": {
      paddingHorizontal: 10,
    },
  },
  statusText: {
    marginBottom: 5,
    fontWeight: "600",
  },
  dateText: {
    "@media (max-width: 667px)": {
      display: "none",
    },
  },
});
