import React, { useRef, useState } from "react";
import { ScrollView, View, TouchableOpacity } from "react-native-web";
import StyleSheet from "react-native-media-query";
import Icon from "react-native-vector-icons/Entypo";
import { CarouselGroup } from "@src/components/scores/carousel/CarouselGroup";
import { Z_INDEXES } from "@src/enum/zIndex";
import { GAME_TYPE } from "@src/enum/GameType";

// @TODO: remove mocks with API
import footballFixtures from "@src/mocks/footballFixtures";
// import basketballFixtures from "@src/mocks/basketballFixtures";
import { normaliseScores } from "@src/utils/scores/normaliseScores";
import { getTheme } from "@scores/theme/utils/theme";
import { getPrimaryText } from "@scores/theme/utils/variables";

const SCROLL_DISTANCE = 500;

export const ScoresCarousel = () => {
  const themeStyles = getTheme();
  const scrollRef = useRef(null);
  const footballData = normaliseScores(footballFixtures, GAME_TYPE.FOOTBALL);
  const [position, setPosition] = useState<number>(0);

  const scrollLeft = () => {
    scrollRef.current.scrollTo({
      x: position - SCROLL_DISTANCE,
      animated: true,
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollTo({
      x: position + SCROLL_DISTANCE,
      animated: true,
    });
  };

  return (
    <View style={[styles.container, themeStyles.darkContainer]} dataSet={{ media: ids.container }}>
      <View
        style={styles.scoresContainer}
        dataSet={{ media: ids.scoresContainer }}
      >
        <View
          style={[
            styles.arrowContainer,
            styles.arrowLeft,
            position < 150 && styles.hiddenContainer,
            themeStyles.lightContainer,
          ]}
        >
          <TouchableOpacity
            style={[styles.scrollContainer]}
            onPress={scrollLeft}
          >
            <Icon
              name={"chevron-thin-left"}
              size={30}
              color={getPrimaryText()}
            />
          </TouchableOpacity>
        </View>

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

        <View
          style={[
            styles.arrowContainer,
            styles.arrowRight,
            themeStyles.lightContainer,
          ]}
        >
          <TouchableOpacity
            style={[styles.scrollContainer]}
            onPress={scrollRight}
          >
            <Icon
              name={"chevron-thin-right"}
              size={30}
              color={getPrimaryText()}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const { ids, styles } = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    zIndex: Z_INDEXES.OVERLAY,
    backgroundColor: "rgb(237, 238, 240)",
    borderBottomWidth: 1,
  },
  scoresContainer: {
    width: "100%",
    "@media (min-width: 1400px)": {
      width: 1400,
    },
  },
  arrowContainer: {
    position: "absolute",
    height: "100%",
    width: 50,
    backgroundColor: "rgb(237, 238, 240)",
    zIndex: Z_INDEXES.OVERLAY_COVER,
  },
  hiddenContainer: {
    opacity: 0,
  },
  scrollContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowLeft: {
    left: 0,
    borderRightWidth: 1,
  },
  arrowRight: {
    right: 0,
    borderLeftWidth: 1,
  },
});
