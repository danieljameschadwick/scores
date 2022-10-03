import React, { useRef, useEffect, useState } from "react";
import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import StyleSheet from "react-native-media-query";
import Icon from "react-native-vector-icons/Entypo";
import { CarouselGroup } from "@scores/ui/components/carousel/CarouselGroup";
import { Z_INDEXES } from "@scores/types/enum/zIndex";
import { getThemes } from "@scores/theme/utils/theme";
import { CarouselText } from "@scores/ui/components/carousel/CarouselText";
import { CarouselDateDropdown } from "@scores/ui/components/carousel/CarouselDropdown";
import { normaliseScores } from "@scores/http/utils/normaliseScores";
import { GAME_TYPE } from "@scores/types/enum/GameType";
import { getFixtures } from "@scores/http/services/football";
import { Month } from "@scores/types/enum/Month";

const SCROLL_DISTANCE = 500;

export const ScoresCarousel: React.FC = () => {
  const { themeStyles, primaryText } = getThemes();
  const scrollRef = useRef(null);
  const [month, setMonth] = useState<Month>(Month.AUGUST);
  const [position, setPosition] = useState<number>(0);
  const [data, setData] = useState<{} | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setData(normaliseScores(await getFixtures(month), GAME_TYPE.FOOTBALL));
    };

    fetchData();
  }, [month]);

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

  if (data === null) {
    // @TODO: loading container
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View
      style={[styles.container, themeStyles.lightContainer]}
      dataSet={{ media: ids.container }}
    >
      <View
        style={styles.scoresContainer}
        dataSet={{ media: ids.scoresContainer }}
      >
        <CarouselDateDropdown month={month} setMonth={setMonth} />
        <CarouselText text={"Football"} />

        <View style={styles.scrollWrapper}>
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
              <Icon name={"chevron-thin-left"} size={30} color={primaryText} />
            </TouchableOpacity>
          </View>

          <ScrollView
            ref={scrollRef}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            onScroll={(e) => setPosition(e.nativeEvent.contentOffset.x)}
            scrollEventThrottle={0}
          >
            <CarouselGroup
              groupName={"Football"}
              leagueName={"PL"}
              scores={data}
            />
            {/* <CarouselGroup groupName={"NBA"} scores={basketballFixtures} /> */}
          </ScrollView>
        </View>

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
            <Icon name={"chevron-thin-right"} size={30} color={primaryText} />
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
    height: 60.5,
    width: "100%",
    zIndex: Z_INDEXES.OVERLAY,
    backgroundColor: "rgb(237, 238, 240)",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
  },
  scoresContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    overflow: "hidden",
    // overflowX: "visible",
    // overflowY: "hidden",
    "@media (min-width: 1400px)": {
      width: 1400,
    },
  },
  scrollWrapper: {
    width: "100%",
    overflow: "hidden",
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
    borderRightWidth: 1,
  },
});
