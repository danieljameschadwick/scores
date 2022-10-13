import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import StyleSheet from "react-native-media-query";
import { getThemes } from "@scores/theme/utils/theme";
import { CarouselDateDropdown } from "../CarouselDropdown";
import { CarouselText } from "../CarouselText";
import { Z_INDEXES } from "@scores/types/enum/zIndex";
import { Month } from "@scores/types/enum/Month";

interface Props {
  month: Month;
  setMonth: Dispatch<SetStateAction<Month>>;
  children: any;
}

export const CarouselContainer: React.FC<Props> = ({
  month,
  setMonth,
  children,
}) => {
  const { themeStyles } = getThemes();

  return (
    <View
      style={[styles.container, themeStyles.lightContainer]}
      dataSet={{ media: ids.container }}
    >
      <View
        style={[styles.scoresContainer, themeStyles.lightContainer]}
        dataSet={{ media: ids.scoresContainer }}
      >
        <CarouselDateDropdown month={month} setMonth={setMonth} />
        <CarouselText text={"Football"} hideable={true} />

        { children }
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
  },
  scoresContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    borderRightWidth: 1,
    "@media (min-width: 1400px)": {
      width: 1400,
    },
  },
});
