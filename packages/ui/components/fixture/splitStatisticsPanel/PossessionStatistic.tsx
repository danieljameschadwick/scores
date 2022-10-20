import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getTheme } from "@scores/theme/utils/theme";
import { LoadingContainer } from "../loadingContainer/LoadingContainer";

export const PossessionStatistic = () => {
  const themeStyles = getTheme();

  return (
    <View style={[styles.container]}>
        <LoadingContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
