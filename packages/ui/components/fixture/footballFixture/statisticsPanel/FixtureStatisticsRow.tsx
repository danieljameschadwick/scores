import React from "react";
import { useTheme } from "@scores/theme/utils/theme";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  homeStatistic: number;
  awayStatistic: number;
  type: string;
  isAlternate: boolean;
}

export const FixtureStatisticsRow: React.FC<Props> = ({
  homeStatistic,
  awayStatistic,
  type,
  isAlternate = false,
}) => {
  const themeStyles = useTheme();

  return (
    <View
      style={[
        styles.row,
        styles.borderedRow,
        isAlternate && themeStyles.lightContainer,
      ]}
    >
      <Text style={[styles.statisticValueText, themeStyles.text]}>{homeStatistic}</Text>

      <Text style={[styles.statisticTypeText, themeStyles.text]}>{type}</Text>

      <Text style={[styles.statisticValueText, themeStyles.text]}>{awayStatistic}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 8,
  },
  borderedRow: {
    borderTopWidth: 1,
    borderTopColor: "#edeef0",
  },
  statisticValueText: {
    fontWeight: "600",
  },
  statisticTypeText: {
    fontSize: 13,
  }
});
