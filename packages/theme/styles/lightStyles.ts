import { StyleSheet } from "react-native";
import { primaryBorderColor, primaryContainer, primaryText } from "../variables/lightPalette";

export const lightStyles = StyleSheet.create({
  body: {
    backgroundColor: "rgb(249, 249, 249)",
  },
  container: {
    backgroundColor: primaryContainer,
  },
  lightContainer: {
    backgroundColor: "rgb(248, 248, 248)",
    borderColor: primaryBorderColor,
  },
  mediumContainer: {
    backgroundColor: "rgb(232, 234, 237)",
    borderColor: primaryBorderColor
  },
  darkContainer: {
    backgroundColor: "rgb(232, 234, 237)",
    borderColor: primaryBorderColor
  },
  icon: {
    color: primaryText,
  },
  text: {
    color: primaryText,
  },
});
