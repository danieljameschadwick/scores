import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { CarouselGroup } from "@src/components/scores/carousel/CarouselGroup";
import { Z_INDEXES } from "@src/enum/zIndex";
import { GAME_TYPE } from "@src/enum/GameType";

// @TODO: remove mocks with API
import footballFixtures from "@src/mocks/footballFixtures";
import basketballFixtures from "@src/mocks/basketballFixtures";
import { normaliseScores } from "@src/utils/scores/normaliseScores";

export const ScoresCarousel = () => {
  const footballData = normaliseScores(footballFixtures, GAME_TYPE.FOOTBALL);

  return (
    <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
      {/* <View style={styles.container}> */}
        <CarouselGroup groupName={"Football"} leagueName={"PL"} scores={footballData} />
        {/* <CarouselGroup groupName={"NBA"} scores={basketballFixtures} /> */}
      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 57.5,
    // width: "100%",
    zIndex: Z_INDEXES.OVERLAY,
  },
});
