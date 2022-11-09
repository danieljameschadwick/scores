import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useThemes } from "@scores/theme/utils/theme";

export const NoGamesScheduledContainer = () => {
  const { themeStyles } = useThemes();

  return (
    <View style={[styles.container]} testID={"carousel-no-games-scheduled"}>
      <Text style={[styles.text, themeStyles.text]}>No games scheduled.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    gap: 6,
  },
  text: {
    fontSize: 12,
  },
});
