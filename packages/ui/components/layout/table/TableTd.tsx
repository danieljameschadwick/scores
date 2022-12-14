import React from "react";
import StyleSheet from "react-native-media-query";
import { View, Text } from "react-native";
import { useTheme } from "@scores/theme/utils/theme";

export const TableTd = ({ config, showIndex, value }) => {
  const themeStyles = useTheme();

  const { ids, styles } = StyleSheet.create({
    td: {
      paddingHorizontal: 5,
    },
    keyTd: {
      "@media (max-width: 400px)": {
        maxWidth: 55,
      },
    },
    widthTd: {
      width: config?.style?.width,
    },
    tdText: {
      fontSize: 12,
      fontWeight: "600",
    },
    keyTdText: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    tdTextCenter: {
      textAlign: "center",
    },
    tdGrow: {
      flexGrow: 1,
    },
  });

  // we need a way to disable keyTd if it is not indexed 
  const media =
    (!showIndex && config.style?.key) && ids.keyTd
  ;

  return (
    <View
      style={[
        styles.td,
        config.style?.grow && styles.tdGrow,
        (!showIndex && config.style?.key) && styles.keyTd,
      ]}
      dataSet={{ media: media }}
    >
      <Text
        style={[
          styles.tdText,
          themeStyles.text,
          config.style?.center && styles.tdTextCenter,
          config.style?.width && styles.widthTd,
          config.style?.key && styles.keyTdText,
        ]}
      >
        {value}
      </Text>
    </View>
  );
};
