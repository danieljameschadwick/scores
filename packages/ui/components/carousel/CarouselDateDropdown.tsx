import React from "react";
import { Platform, View } from "react-native";
import StyleSheet from "react-native-media-query";
import { useTheme } from "@scores/theme/utils/theme";
import { Dropdown } from "@scores/ui/components/common/dropdown/Dropdown";
import { Month } from "@scores/types/enum/Month";
import { System } from "@scores/types/enum/System";

interface Props {
  month: Month;
  setMonth: (month: Month) => {};
}

export const CarouselDateDropdown: React.FC<Props> = ({ month, setMonth }) => {
  const themeStyles = useTheme();

  // @TODO: Dropdown is currently not supported on the app
  if (Platform.OS !== System.WEB) {
    return null;
  }

  return (
    <View
      style={[styles.container, themeStyles.lightContainer]}
      dataSet={{ media: ids.container }}
    >
      <Dropdown
        value={month}
        setValue={setMonth}
        values={[
          { label: 'August', value: Month.AUGUST },
          { label: 'September', value: Month.SEPTEMBER },
        ]}
      />
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
