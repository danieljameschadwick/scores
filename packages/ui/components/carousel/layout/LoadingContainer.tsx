import { getThemes } from "@scores/theme/utils/theme";
import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";

export const LoadingContainer = () => {
  const { themeStyles, primaryText } = getThemes();
  return (
    <View style={[styles.loadingWrapper]}>
      <ActivityIndicator color={primaryText} />
      <Text style={[themeStyles.text]}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    gap: 6,
  },
});
