import { getTheme } from "@scores/theme/utils/theme";
import React from "react";
import { View, Text, StyleSheet } from "react-native-web";

interface Props {
  text: string;
}

export const CarouselText: React.FC<Props> = ({ text }) => {
  const themeStyles = getTheme();

  return (
    <View style={[styles.container, themeStyles.lightContainer]}>
      <Text style={[styles.text, themeStyles.text]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 55,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(232 234 237)",
    borderRightWidth: 1,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
  },
});
