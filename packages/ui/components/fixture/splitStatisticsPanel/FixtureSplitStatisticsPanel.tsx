import React from "react";
import { View } from "react-native";
import StyleSheet from "react-native-media-query";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Panel } from "@scores/ui/components/layout/panel/Panel";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { useFixture } from "@scores/ui/state/FixtureContext";
import { useTheme } from "@scores/theme/utils/theme";
import { PossessionStatistic } from "@scores/ui/components/fixture/splitStatisticsPanel/possessionStatistic/PossessionStatistic";
import { LoadingContainer } from "../loadingContainer/LoadingContainer";
import { ShotsStatistic } from "./shotsStatistic/ShotsStatistic";

export const FixtureSplitStatisticsPanel = () => {
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
          <>
            <View style={[styles.row]}>
              <PossessionStatistic />
            </View>

            <View style={[styles.divider]} />

            <View style={[styles.row]}>
              <ShotsStatistic />
            </View>
          </>
        )}
      </View>
    </Panel>
  );
};

const { styles } = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  row: {
    width: "100%",
    marginBottom: 10,
  },
  divider: {
    width: "100%",
    marginVertical: 10,
    borderBottomColor: "rgb(124, 124, 124)",
    borderBottomWidth: 1,
  },
});
