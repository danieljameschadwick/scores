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
  const rowStyles = [styles.row, styles.borderedRow];

  if (isAlternate) rowStyles.push(themeStyles.lightContainer);

  return (
    <View style={[rowStyles]}>
      <Text style={[themeStyles.text]}>{homeStatistic}</Text>

      <Text style={[themeStyles.text]}>{type}</Text>

      <Text style={[themeStyles.text]}>{awayStatistic}</Text>
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
});
