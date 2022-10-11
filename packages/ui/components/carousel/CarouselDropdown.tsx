import React from "react";
import { View } from "react-native";
import StyleSheet from "react-native-media-query";
import { getTheme } from "@scores/theme/utils/theme";
import { Dropdown } from "@scores/ui/components/common/dropdown/Dropdown";
import { Month } from "@scores/types/enum/Month";

// @TODO: Replace drilling with a useContext?

interface Props {
   month: Month;
   setMonth: (month: Month) => {};
}

export const CarouselDateDropdown: React.FC<Props> = ({ month, setMonth }) => {
  const themeStyles = getTheme();
 
  return (
    <View style={[styles.container, themeStyles.lightContainer]} dataSet={{ media: ids.container }}>
      <Dropdown month={month} setMonth={setMonth} />
    </View>
  );
};

const { ids, styles } = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: 160,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    "@media (max-width: 667px)": {
      display: "none",
    },
  },
});
