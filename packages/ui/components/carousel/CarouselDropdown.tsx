import React from "react";
import { StyleSheet, View } from "react-native";
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
    <View style={[styles.container, themeStyles.lightContainer]}>
      <Dropdown month={month} setMonth={setMonth} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: 160,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
  },
});