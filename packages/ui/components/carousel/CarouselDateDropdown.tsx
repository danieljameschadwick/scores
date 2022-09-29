import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { getTheme } from "@scores/theme/utils/theme";
import { Dropdown } from "@scores/ui/components/common/Dropdown";
import { Month } from "@scores/types/enum/Month";

interface Props {
  text: string;
}

export const CarouselDateDropdown: React.FC<Props> = ({ text }) => {
  const themeStyles = getTheme();
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>(Month.SEPTEMBER);
  const [items, setItems] = useState([
    { label: "August", value: Month.AUGUST },
    { label: "September", value: Month.SEPTEMBER },
  ]);

  return (
    <View style={[styles.container, themeStyles.lightContainer]}>
      <Dropdown />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(232 234 237)",
    borderRightWidth: 1,
    paddingHorizontal: 20,
  },
});
