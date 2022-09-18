import { StyleSheet } from "react-native";
import { primaryBorderColor, primaryContainer, primaryText } from "../variables/darkPalette";

export const darkStyles = StyleSheet.create({
  body: {
    backgroundColor: "rgb(19,19,19)",
  },
  container: {
    backgroundColor: primaryContainer,
  },
  lightContainer: {
    backgroundColor: "rgb(39, 39, 39)",
    borderColor: primaryBorderColor,
  },
  mediumContainer: {
    backgroundColor: "rgb(58, 58, 58)",
    borderColor: primaryBorderColor,
  },
  darkContainer: {
    backgroundColor: "rgb(92, 92, 92)",
    borderColor: primaryBorderColor,
  },
  icon: {
    color: primaryText,
  },
  text: {
    color: primaryText,
  },
});
