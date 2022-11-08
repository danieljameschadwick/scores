import React from "react";
import { Text, View } from "react-native";
import StyleSheet from "react-native-media-query";
import { useTheme } from "@scores/theme/utils/theme";
import { useFixture } from "../../../../state/FixtureContext";
import { PossessionChart } from "./PossessionChart";
import { Statistic } from "@scores/types/enum/Statistic";

export const PossessionStatistic = () => {
  const themeStyles = useTheme();
  const fixture = useFixture();
  const { home, away, statistics } = fixture;

  // @TODO: a map would be much better here than an object
  // e.g statistics.get(Statistic.POSSESSION);
  const { homeValue, awayValue } = statistics[Statistic.POSSESSION];

  return (
    <View style={[styles.container]}>
      <View style={[styles.row, styles.titleRow]}>
        <Text style={[styles.abbreviationText, themeStyles.text]}>
          {home.abbreviation}
        </Text>

        <Text style={[styles.titleText, themeStyles.text]}>Possession</Text>

        <Text style={[styles.abbreviationText, themeStyles.text]}>
          {away.abbreviation}
        </Text>
      </View>

      <View style={[styles.row]}>
        <Text style={[styles.possesionText, themeStyles.text]}>
          {homeValue}%
        </Text>

        <View
          style={[styles.possessionContainer]}
          dataSet={{ media: ids.possessionContainer }}
        >
          <PossessionChart home={homeValue} away={awayValue} />
        </View>

        <Text style={[styles.possesionText, themeStyles.text]}>
          {awayValue}%
        </Text>
      </View>
    </View>
  );
};

const { ids, styles } = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleRow: {
    marginBottom: 5,
  },
  abbreviationText: {
    fontWeight: "700",
  },
  titleText: {
    fontSize: 14,
    fontWeight: "600",
  },
  possesionText: {
    fontSize: 24,
    fontWeight: "700",
  },
  possessionContainer: {
    flexGrow: 1,
    // @TODO: for some reason flexGrow overflows JUST on the app
    marginHorizontal: 15,
    "@media (max-width: 667px)": {
      maxWidth: "50%",
    },
  },
});
