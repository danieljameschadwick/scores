import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@scores/theme/utils/theme";
import { useFixture } from "../../../../state/FixtureContext";
import { PossessionChart } from "./PossessionChart";

export const PossessionStatistic = () => {
  const themeStyles = useTheme();
  const fixture = useFixture();
  const { home, away, statistics } = fixture;

  console.log(statistics);

  return (
    <View style={[styles.container]}>
      <View style={[styles.row, styles.titleRow]}>
        <Text style={[themeStyles.text]}>{home.abbreviation}</Text>

        <Text style={[styles.titleText, themeStyles.text]}>Possession</Text>

        <Text style={[themeStyles.text]}>{away.abbreviation}</Text>
      </View>

      <View style={[styles.row]}>
        <Text style={[styles.possesionText, themeStyles.text]}>39%</Text>

        <View style={[styles.possessionContainer]}>
          <PossessionChart home={39} away={61} />
        </View>

        <Text style={[styles.possesionText, themeStyles.text]}>61%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginHorizontal: 15,
  },
});
