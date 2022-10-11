import React, { useRef, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import StyleSheet from "react-native-media-query";
import Icon from "react-native-vector-icons/Entypo";
import { CarouselGroup } from "@scores/ui/components/carousel/CarouselGroup";
import { Z_INDEXES } from "@scores/types/enum/zIndex";
import { getThemes } from "@scores/theme/utils/theme";
import { normaliseScores } from "@scores/http/utils/normaliseScores";
import { GAME_TYPE } from "@scores/types/enum/GameType";
import { getFixtures } from "@scores/http/services/football";
import { Month } from "@scores/types/enum/Month";
import { CarouselContainer } from "./layout/CarouselContainer";
import { LoadingContainer } from "./layout/LoadingContainer";

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
    return (
      <CarouselContainer month={month} setMonth={setMonth}>
        <LoadingContainer />
      </CarouselContainer>
    );
  }

  return (
    <CarouselContainer month={month} setMonth={setMonth}>
      <View style={[styles.scrollWrapper]}>
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
    </CarouselContainer>
  );
};

const { styles } = StyleSheet.create({
  loadingWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
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
  },
});
