import React from "react";
import { StyleProp, View, ViewStyle } from "react-native-web";
import StyleSheet from "react-native-media-query";
import { getTheme } from "@scores/theme/utils/theme";

interface Props {
  style: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export const FluidPageContent: React.FC<Props> = ({ style: propStyles, children }) => {
  const themeStyles = getTheme();

  return (
    <View style={[ styles.container, themeStyles.body, propStyles?.container ]} dataSet={{ media: ids.container }}>
      { children }
    </View>
  );
};

const { ids, styles } = StyleSheet.create({
  container: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    "@media (max-width: 667px)": {
      width: "100%",
    },
  },
});
