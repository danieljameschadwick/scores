import React from "react";
import { View, Text, StyleSheet } from "react-native-web";

interface Props {
  text: string;
}

export const CarouselText: React.FC<Props> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 55,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#edeef0",
    borderRightWidth: 1,
    borderRightColor: "rgb(215, 220, 224)",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(215, 220, 224)",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
  },
});
