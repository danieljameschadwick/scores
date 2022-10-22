import React from "react";
import { StyleSheet, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Panel } from "@scores/ui/components/layout/panel/Panel";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { useFixture } from "@scores/ui/state/FixtureContext";
import { useTheme } from "@scores/theme/utils/theme";
import { PossessionStatistic } from "@scores/ui/components/fixture/splitStatisticsPanel/possessionStatistic/PossessionStatistic";
import { LoadingContainer } from "../loadingContainer/LoadingContainer";

export const FixtureSplitStatisticsPanel = () => {
  const themeStyles = useTheme();
  const fixture = useFixture();
  const { statistics } = fixture;

  return (
    <Panel
      title={"H2H Statistics"}
      icon={<AntDesign name={"areachart"} size={24} color={getPrimaryText()} />}
    >
      <View style={[styles.container]}>
        {Object.keys(statistics).length === 0 ? (
          <LoadingContainer />
        ) : (
          <PossessionStatistic />
        )}
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
