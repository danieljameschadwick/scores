import React from "react";
import { StyleSheet, View } from "react-native";

const Possession = ({ size, color }) => {
  const possessionStyles = StyleSheet.create({
    container: {
      width: `${size}%`,
      height: "100%",
      backgroundColor: color,
    },
  });

  return <View style={[possessionStyles.container]} />;
};

export const PossessionChart = ({ home, away }) => {
  return (
    <View style={[styles.container]}>
      <Possession size={home} color={"red"} />

      <View style={[styles.divider]} />

      <Possession size={away} color={"black"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 10,
    borderRadius: 50,
    overflow: "hidden",
  },
  divider: {
    width: 5,
  },
});
