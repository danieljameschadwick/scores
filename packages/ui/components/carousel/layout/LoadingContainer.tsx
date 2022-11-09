import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { useThemes } from "@scores/theme/utils/theme";

export const LoadingContainer = () => {
  const { themeStyles, primaryText } = useThemes();
  return (
    <View style={[styles.loadingWrapper]} testID={"carousel-loader"}>
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
