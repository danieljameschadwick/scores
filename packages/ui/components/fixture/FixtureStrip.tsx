import React from "react";
import { StyleSheet, View, Text } from "react-native";
import format from "date-fns/format";
import { getTheme } from "@scores/theme/utils/theme";
import { useFixture } from "@scores/ui/components/fixture/FixtureContext";
import { FixtureStripScore } from "@scores/ui/components/fixture/FixtureStripScore";

export const FixtureStrip = () => {
  const fixture = useFixture();
  const themeStyles = getTheme();

  const {
    fixture: { date },
    teams: { home, away },
    goals: { home: homeGoals, away: awayGoals },
  } = fixture;

  return (
    <View style={[styles.container]}>
      <FixtureStripScore team={away} score={awayGoals} />
      <View style={[styles.statusContainer]}>
        <Text style={[styles.statusText, themeStyles.text]}>FT</Text>
        <Text style={[themeStyles.text]}>
          {format(new Date(date), "dd/MM/yyyy")}
        </Text>
      </View>
      <FixtureStripScore team={home} score={homeGoals} isHome={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 15,
  },
  statusContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  statusText: {
    marginBottom: 5,
  },
});
