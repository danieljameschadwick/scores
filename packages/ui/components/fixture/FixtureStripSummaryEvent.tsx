import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getTheme } from "@scores/theme/utils/theme";

export const FixtureStripSummaryEvent = ({ player, time, type }) => {
  const themeStyles = getTheme();

  return (
    <View
      key={`${player.id}-${time.elapsed}-${type}`}
      style={[styles.eventContainer]}
    >
      <Text style={[styles.playerNameText, themeStyles.text]}>
        {player.name}
      </Text>
      <Text style={[themeStyles.text]}>{`(${time.elapsed}")`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    display: "flex",
    flexDirection: "row",
  },
  playerNameText: {
    marginRight: 3,
    color: "white",
    fontWeight: "700",
  },
});
