import React from "react";
import StyleSheet from "react-native-media-query";
import { View, Text } from "react-native";
import { useTheme } from "@scores/theme/utils/theme";

export const TableTd = ({ config, value }) => {
  const themeStyles = useTheme();

  const { ids, styles } = StyleSheet.create({
    td: {
      paddingHorizontal: 5,
    },
    keyTd: {
      "@media (max-width: 400px)": {
        maxWidth: 55,
      },
      "@media (min-width: 990px)": {
        maxWidth: 55,
      },
    },
    widthTd: {
      width: config?.style?.width,
    },
    tdText: {
      fontSize: 12,
      fontWeight: "600",
      textTransform: "uppercase",
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

  return (
    <View
      style={[
        styles.td,
        config.style?.grow && styles.tdGrow,
        config.style?.key && styles.keyTd,
      ]}
      dataSet={{ media: ids.keyTd }}
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
