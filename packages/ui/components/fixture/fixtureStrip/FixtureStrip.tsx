import React from "react";
import { View } from "react-native";
import StyleSheet from "react-native-media-query";
import { FixtureStripScores } from "@scores/ui/components/fixture/fixtureStrip/FixtureStripScores";
import { FixtureStripSummary } from "@scores/ui/components/fixture/fixtureStrip/FixtureStripSummary";

export const FixtureStrip = () => {
  return (
    <View style={[styles.container]}>
      <FixtureStripScores />
      <FixtureStripSummary />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
