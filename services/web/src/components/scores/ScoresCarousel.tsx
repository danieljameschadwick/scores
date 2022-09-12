import React from "react";
import { View, StyleSheet } from "react-native";
import { CarouselGroup } from "@src/components/scores/carousel/CarouselGroup";
import { Z_INDEXES } from "@src/enum/zIndex";

export const ScoresCarousel = () => {
  return (
    <View style={styles.container}>
        <CarouselGroup />
        {/* <CarouselGroup /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    overflowX: "scroll",
    zIndex: Z_INDEXES.OVERLAY,
  },
});
