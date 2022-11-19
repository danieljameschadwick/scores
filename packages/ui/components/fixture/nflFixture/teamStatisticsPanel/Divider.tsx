import { useTheme } from "@scores/theme/utils/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

export const Divider = () => {
  const themeStyles = useTheme();

  return <View style={[styles.container, themeStyles.mediumContainer]} />;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    // @TODO: do we need a border?
    // borderBottomColor: "#FFFFFF", // @TODO: need to invert primary
    // borderBottomWidth: 1,
  },
});
