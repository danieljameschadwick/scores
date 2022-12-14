import React from "react";
import StyleSheet from "react-native-media-query";
import { Text, View } from "react-native";
import { hexToRGBA } from "@scores/ui/util/color/hexToRGBA";
import { useTheme } from "@scores/theme/utils/theme";

export const ShotChart = ({
  shots,
  shotsOnTarget,
  maxShots,
  color,
  reverse = false,
}) => {
  const themeStyles = useTheme();
  const shotsPercentage = (shots / maxShots) * 100;
  const onTargetPercentage = (shotsOnTarget / shots) * 100;

  const { ids, styles } = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
    },
    chartTitle: {
      marginBottom: 5,
    },
    chartTitleText: {
      fontWeight: "600",
      textAlign: "center",
    },
    chartContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      // @TODO: again, flexGrow seems to be broken so doesn't fill the container...
      // flexGrow: 1,
      height: 180,
      "@media (max-width: 667px)": {
        height: 70,
      },
    },
    shotsContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      width: `${shotsPercentage}%`,
      height: `${shotsPercentage}%`,
      borderRadius: 10,
      borderBottomRightRadius: 0,
      overflow: "hidden",
      backgroundColor: hexToRGBA(color, 0.3),
    },
    reverseShotsContainer: {
      alignItems: "flex-start",
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 0,
    },
    shotsOnTargetContainer: {
      height: `${onTargetPercentage}%`,
      width: `${onTargetPercentage}%`,
      borderTopLeftRadius: 5,
      overflow: "hidden",
      backgroundColor: color,
    },
    reverseShotsOnTargetContainer: {
      alignItems: "flex-start",
      borderTopRightRadius: 5,
      borderTopLeftRadius: 0,
    },
  });

  return (
    <View style={[styles.container]}>
      <View style={[styles.chartTitle]}>
        <Text style={[styles.chartTitleText, themeStyles.text]}>
          {shotsOnTarget} ({shots})
        </Text>
      </View>

      <View
        style={[styles.chartContainer]}
        dataSet={{ media: ids.chartContainer }}
      >
        <View
          style={[
            styles.shotsContainer,
            reverse && styles.reverseShotsContainer,
          ]}
        >
          <View
            style={[
              styles.shotsOnTargetContainer,
              reverse && styles.reverseShotsOnTargetContainer,
            ]}
          />
        </View>
      </View>
    </View>
  );
};
