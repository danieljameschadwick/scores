import React, { useRef, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import StyleSheet from "react-native-media-query";
import Icon from "react-native-vector-icons/Entypo";
import { CarouselGroup } from "@scores/ui/components/carousel/CarouselGroup";
import { Z_INDEXES } from "@scores/types/enum/zIndex";
import { getTheme } from "@scores/theme/utils/theme";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { CarouselDateDropdown } from "@scores/ui/components/carousel/CarouselDateDropdown";
import { Month } from "@scores/types/enum/Month";
import { CarouselText } from "@scores/ui/components/carousel/CarouselText";

const SCROLL_DISTANCE = 500;

interface Props {
  data: {};
}

export const ScoresCarousel: React.FC<Props> = ({ data }) => {
  const themeStyles = getTheme();
  const scrollRef = useRef(null);
  const [month, setMonth] = useState<Month>(Month.AUGUST);
  const [position, setPosition] = useState<number>(0);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);
  const rightArrowStyles = [
    styles.arrowContainer,
    styles.relativeArrowContainer,
    styles.arrowRight,
  ];

  if (!showRightArrow) {
    // @TODO: debug
    // rightArrowStyles.push(styles.hiddenContainer);
  }

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setPosition(event.nativeEvent.contentOffset.x);

    if (isCloseToEnd(event.nativeEvent)) {
      setShowRightArrow(false);
      console.log("is close to end");
    } else {
      setShowRightArrow(true);
      console.log("is not close to end");
    }
  };

  const isCloseToEnd = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToEnd = 60;

    console.log(layoutMeasurement);
    console.log(contentSize);

    console.log(
      `${layoutMeasurement.width} + ${contentOffset.x} >= ${contentSize.width} - ${paddingToEnd}`
    );
    console.log(layoutMeasurement.width + contentOffset.x);
    console.log(contentSize.width - paddingToEnd);

    console.log(
      layoutMeasurement.width + contentOffset.x >=
        contentSize.width - paddingToEnd
    );

    return (
      layoutMeasurement.width + contentOffset.x >=
      contentSize.width - paddingToEnd
    );
  };

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
    <View
      style={[styles.container, themeStyles.darkContainer]}
      dataSet={{ media: ids.container }}
    >
      <CarouselDateDropdown />
      <CarouselText text={"Football"} />

      <View
        style={[styles.scoresContainer]}
        dataSet={{ media: ids.scoresContainer }}
      >
        <View
          style={[
            styles.arrowContainer,
            styles.arrowLeft,
            // position < 150 && styles.hiddenContainer,
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
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          onScroll={(event) => onScroll(event)}
          scrollEventThrottle={0}
        >
          <CarouselGroup leagueName={"PL"} scores={data} />
        </ScrollView>

        <View style={[rightArrowStyles, themeStyles.lightContainer]}>
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
    flexDirection: "row-reverse",
    alignItems: "center",
    height: 60.5,
    zIndex: Z_INDEXES.OVERLAY,
    backgroundColor: "rgb(237, 238, 240)",
    borderBottomWidth: 1,
  },
  scoresContainer: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    height: "100%",
    // @TODO: width
    // width: "100%",
    // "@media (min-width: 1400px)": {
    //   width: 1400,
    // },
  },
  scrollWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  arrowContainer: {
    // position: "absolute",
    flexBasis: 50,
    height: "100%",
    width: 50,
    backgroundColor: "rgb(237, 238, 240)",
    zIndex: Z_INDEXES.OVERLAY_COVER,
  },
  relativeArrowContainer: {
    position: "relative",
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
