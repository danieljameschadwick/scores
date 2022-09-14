import { StyleSheet } from "react-native";
import { primaryText } from "../variables/darkPalette";

export const darkStyles = StyleSheet.create({
  body: {
    backgroundColor: "rgb(19,19,19)",
  },
  container: {
    backgroundColor: "rgb(19,19,19)",
  },
  lightContainer: {
    backgroundColor: "rgb(39, 39, 39)",
  },
  mediumContainer: {
    backgroundColor: "rgb(58, 58, 58)",
  },
  darkContainer: {
    backgroundColor: "rgb(92, 92, 92)",
  },
  icon: {
    color: primaryText,
  },
  text: {
    color: primaryText,
  },
});
