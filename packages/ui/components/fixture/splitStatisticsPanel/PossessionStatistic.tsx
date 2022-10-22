import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@scores/theme/utils/theme";
import { LoadingContainer } from "../loadingContainer/LoadingContainer";

export const PossessionStatistic = () => {
  const themeStyles = useTheme();

  return (
    <View style={[styles.container]}>
        <LoadingContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
