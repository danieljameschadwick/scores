import React from "react";
import { StyleProp, View, ViewStyle } from "react-native-web";
import StyleSheet from "react-native-media-query";
import { useAppSelector } from "@scores/state/hooks";
import { selectTheme } from "@scores/state/reducer/ThemeReducer";
import { getTheme } from "@scores/theme/utils/theme";

interface Props {
  styles: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export const FluidPageContent: React.FC<Props> = ({ styles: propStyles, children }) => {
  const themeStyles = getTheme();

  return (
    <View style={[ styles.container, themeStyles.container, propStyles?.container ]} dataSet={{ media: ids.container }}>
      { children }
    </View>
  );
};

const { ids, styles } = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    "@media (max-width: 667px)": {
      paddingLeft: "12px",
      paddingRight: "12px",
      width: "100%",
    },
  },
});
