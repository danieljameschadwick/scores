import React from "react";
import { View, Text } from "react-native";
import StyleSheet from "react-native-media-query";
import { useTheme } from "@scores/theme/utils/theme";

interface Props {
  text: string;
  hideable: boolean;
}

export const CarouselText: React.FC<Props> = ({ text, hideable = false }) => {
  const themeStyles = useTheme();

  return (
    <View
      style={[
        styles.container,
        themeStyles.lightContainer,
        hideable && styles.hideableContainer,
      ]}
      dataSet={{ media: hideable && ids.hideableContainer }}
    >
      <Text style={[styles.text, themeStyles.text]}>{text}</Text>
    </View>
  );
};

const { ids, styles } = StyleSheet.create({
  container: {
    minWidth: 55,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(232 234 237)",
    borderRightWidth: 1,
    paddingHorizontal: 20,
  },
  hideableContainer: {
    "@media (max-width: 667px)": {
      display: "none",
    },
  },
  text: {
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
  },
});
