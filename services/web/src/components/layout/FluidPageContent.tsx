import React from "react";
import { StyleProp, ViewStyle } from "react-native-web";
import StyleSheet from "react-native-media-query";
import { View } from "react-native-web";

interface Props {
  styles: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export const FluidPageContent: React.FC<Props> = ({ styles: propStyles, children }) => {
  return (
    <View style={[ styles.container, propStyles?.container ]} dataSet={{ media: ids.container }}>
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
