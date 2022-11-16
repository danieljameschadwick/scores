import React from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Panel } from "@scores/ui/components/layout/panel/Panel";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { useFixture } from "@scores/ui/state/FixtureContext";
import { FixtureStatisticsRowHeader } from "@scores/ui/components/fixture/layout/statisticsPanel/FixtureStatisticsRowHeader";
import { FixtureStatisticsRow } from "@scores/ui/components/fixture/layout/statisticsPanel/FixtureStatisticsRow";
import { LoadingContainer } from "@scores/ui/components/fixture/loadingContainer/LoadingContainer";
import { FootballStatisticDisplayOrder } from "@scores/types/maps/FootballStatisticDisplayOrder";

const formatStatistics = (statistics) => (t) => {
  const formattedStatistics = {};

  for (const [key, statistic] of Object.entries(statistics)) {
    if (!FootballStatisticDisplayOrder[key]) {
      continue;
    }

    formattedStatistics[FootballStatisticDisplayOrder[key]] = {
      ...statistic,
      name: t(`football:${key}`),
    };
  }

  return formattedStatistics;
};

export const FixtureStatisticsPanel = () => {
  const fixture = useFixture();
  const { home, away, statistics } = fixture;
  const { t } = useTranslation();
  const formattedStatistics = formatStatistics(statistics)(t);

  return (
    <Panel
      title={"Statistics"}
      icon={
        <IonIcon name={"bar-chart-sharp"} size={24} color={getPrimaryText()} />
      }
    >
      <View style={[styles.container]}>
        <View style={[styles.tableRow]}>
          <FixtureStatisticsRowHeader {...home} />
          <FixtureStatisticsRowHeader {...away} isAway={true} />
        </View>

        {Object.keys(statistics).length === 0 && <LoadingContainer />}

        {Object.keys(formattedStatistics).map((key, index) => {
          const { homeValue, awayValue, name } = formattedStatistics[key];

          return (
            <FixtureStatisticsRow
              key={key}
              homeStatistic={homeValue}
              awayStatistic={awayValue}
              name={name}
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
