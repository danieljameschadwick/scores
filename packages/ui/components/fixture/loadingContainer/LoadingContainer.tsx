import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { getTheme } from "@scores/theme/utils/theme";

export const LoadingContainer: React.FC = () => {
  const themeStyles = getTheme();

  return (
    <View style={[styles.loadingContainer]}>
      <ActivityIndicator
        style={[styles.loadingIndicator]}
        color={getPrimaryText()}
      />

      <Text style={[themeStyles.text]}>Statistics are being processed...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 20,
  },
  loadingIndicator: {
    marginRight: 6,
  },
});
