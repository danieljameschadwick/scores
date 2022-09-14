import { StyleSheet } from "react-native";
import { primaryText } from "../variables/lightPalette";

export const lightStyles = StyleSheet.create({
  body: {
    backgroundColor: "rgb(249, 249, 249)",
  },
  container: {
    backgroundColor: "rgb(255, 255, 255)",
  },
  lightContainer: {
    backgroundColor: "rgb(248, 248, 248)",
  },
  mediumContainer: {
    backgroundColor: "rgb(232, 234, 237)",
  },
  darkContainer: {
    backgroundColor: "rgb(232, 234, 237)",
  },
  icon: {
    color: primaryText,
  },
  text: {
    color: primaryText,
  },
});
