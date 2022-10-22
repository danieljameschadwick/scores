import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Panel } from "@scores/ui/components/layout/panel/Panel";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { useFixture } from "@scores/ui/state/FixtureContext";
import { FixtureStatisticsRow } from "@scores/ui/components/fixture/statisticsPanel/FixtureStatisticsRow";
import { FixtureStatisticsRowHeader } from "@scores/ui/components/fixture/statisticsPanel/FixtureStatisticsRowHeader";
import { useTheme } from "@scores/theme/utils/theme";
import { LoadingContainer } from "../loadingContainer/LoadingContainer";

export const FixtureStatisticsPanel = () => {
  const fixture = useFixture();
  const { home, away, statistics } = fixture;

  return (
    <Panel
      title={"Statistics"}
      icon={
        <IonIcon
          name={"bar-chart-sharp"}
          size={24}
          color={getPrimaryText()}
        />
      }
    >
      <View style={[styles.container]}>
        <View style={[styles.tableRow]}>
          <FixtureStatisticsRowHeader {...home} />
          <FixtureStatisticsRowHeader {...away} isAway={true} />
        </View>

        {Object.keys(statistics).length === 0 && (
            <LoadingContainer />
        )}

        {Object.keys(statistics).map((key, index) => {
          const { homeValue, awayValue, name } = statistics[key];

          return (
            <FixtureStatisticsRow
              key={key}
              homeStatistic={homeValue}
              awayStatistic={awayValue}
              type={name}
              isAlternate={index % 2 === 0}
            />
          );
        })}
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
});
