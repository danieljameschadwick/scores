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
import { useThemes } from "@scores/theme/utils/theme";
import { normaliseScores } from "@scores/http/utils/normaliseScores";
import { Game } from "@scores/types/enum/Game";
import { getFixtures } from "@scores/http/services/football";
import { Month } from "@scores/types/enum/Month";
import { CarouselContainer } from "./layout/CarouselContainer";
import { LoadingContainer } from "./layout/LoadingContainer";

const SCROLL_DISTANCE = 500;

// @TODO: crude map as some sports e.g. NFL only need to support 1 league
// (or atleast only ones we care to support)
const leagueMap = {
  [Game.FOOTBALL]: 'PL',
  [Game.NFL]: null,
}

export const ScoresCarousel: React.FC = () => {
  const { themeStyles, primaryText } = useThemes();
  const scrollRef = useRef(null);
  const [month, setMonth] = useState<Month>(Month.AUGUST);
  const [game, setGame] = useState<Game>(Game.FOOTBALL);
  const [position, setPosition] = useState<number>(0);
  const [data, setData] = useState<{} | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // @TODO: we don't need to normalise all the stats here
      // only those that are necessary e.g scores, match status
      setData(normaliseScores(await getFixtures(month, game), game));
    };

    fetchData();
  }, [month, game]);

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
    <CarouselContainer
      month={month}
      setMonth={setMonth}
      game={game}
      setGame={setGame}
    >
      <View style={[styles.scrollWrapper]} testID={"carousel-scroll-wrapper"}>
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
            leagueName={leagueMap[game]}
            scores={data}
          />
          {/* // @TODO: add Carousel customisation */}
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
