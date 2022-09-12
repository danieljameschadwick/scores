import React, { useRef, useState } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native-web";
import Icon from "react-native-vector-icons/AntDesign";
import { CarouselGroup } from "@src/components/scores/carousel/CarouselGroup";
import { Z_INDEXES } from "@src/enum/zIndex";
import { GAME_TYPE } from "@src/enum/GameType";

// @TODO: remove mocks with API
import footballFixtures from "@src/mocks/footballFixtures";
// import basketballFixtures from "@src/mocks/basketballFixtures";
import { normaliseScores } from "@src/utils/scores/normaliseScores";

export const ScoresCarousel = () => {
  const scrollRef = useRef(null);
  const footballData = normaliseScores(footballFixtures, GAME_TYPE.FOOTBALL);
  const [position, setPosition] = useState<number>(0);

  const scrollLeft = () => {
    scrollRef.current.scrollTo({ x: position - 300, animated: true });
  };

  const scrollRight = () => {
    scrollRef.current.scrollTo({ x: position + 300, animated: true });
  };

  return (
    <View style={styles.container}>
      {position > 150 && (
        <View style={[styles.arrowContainer, styles.arrowLeft]}>
          <TouchableOpacity onPress={scrollLeft}>
            <Icon name={"down"} size={30} color={"rgb(0,0,0)"} />
          </TouchableOpacity>
        </View>
      )}

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        onScroll={(e) => setPosition(e.nativeEvent.contentOffset.x)}
        scrollEventThrottle={0}
      >
        <CarouselGroup
          groupName={"Football"}
          leagueName={"PL"}
          scores={footballData}
        />
        {/* <CarouselGroup groupName={"NBA"} scores={basketballFixtures} /> */}
      </ScrollView>

      <View style={[styles.arrowContainer, styles.arrowRight]}>
        <TouchableOpacity onPress={scrollRight}>
          <Icon name={"down"} size={30} color={"rgb(0,0,0)"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    zIndex: Z_INDEXES.OVERLAY,
  },
  arrowContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: 50,
    backgroundColor: "rgb(237, 238, 240)",
    border: "1px solid rgb(215, 220, 224)",
    zIndex: Z_INDEXES.OVERLAY_COVER,
  },
  arrowLeft: {
    left: 0,
  },
  arrowRight: {
    right: 0,
  },
});
