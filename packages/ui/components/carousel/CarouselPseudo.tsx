import React from "react";
import { View } from "react-native";
import StyleSheet from "react-native-media-query";
import { getTheme } from "@scores/theme/utils/theme";

/**
 * Not a fan of this solution to match the exact width of
 * the prefixed Dropdown/sport, but React Native ScrollView
 * doesn't seem to handle arrows on the left/right of the 
 * container and doesn't calculate the width correctly.
 */

export const CarouselPseudo: React.FC = () => {
  const themeStyles = getTheme();

  return (
    <View style={[styles.container, themeStyles.lightContainer]} dataSet={{ media: ids.container }} />
  );
};

const { ids, styles } = StyleSheet.create({
  container: {
    width: 295,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(232 234 237)",
    borderRightWidth: 1,
    paddingHorizontal: 20,
    "@media (max-width: 667px)": {
      width: 50,
    },
  },
});
