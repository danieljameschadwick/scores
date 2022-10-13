import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Panel } from "@scores/ui/components/layout/panel/Panel";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { useFixture } from "@scores/ui/state/FixtureContext";
import { getTheme } from "@scores/theme/utils/theme";
import { PossessionStatistic } from "@scores/ui/components/fixture/splitStatisticsPanel/PossessionStatistic";

export const FixtureSplitStatisticsPanel = () => {
  const themeStyles = getTheme();
  const fixture = useFixture();
  const { home, away, statistics } = fixture;

  return (
    <Panel
      title={"H2H Statistics"}
      icon={
        <IonIcon
          name={"stats-chart-sharp"}
          size={24}
          color={getPrimaryText()}
        />
      }
    >
      <View style={[styles.container]}>
        <PossessionStatistic />
      </View>
    </Panel>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 8,
  },
  text: {
    paddingBottom: 10,
  },
});
