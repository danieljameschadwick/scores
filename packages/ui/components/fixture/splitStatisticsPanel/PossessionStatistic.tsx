import React from "react";
import { Text, View } from "react-native";
import { getTheme } from "@scores/theme/utils/theme";

export const PossessionStatistic = () => {
  const themeStyles = getTheme();

  return (
    <View>
      <Text style={[ themeStyles.text ]}>Test</Text>
    </View>
  );
};
