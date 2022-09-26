import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Panel } from "@scores/ui/components/layout/panel/Panel";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { getTheme } from "@scores/theme/utils/theme";
import { useFixture } from "@scores/ui/components/fixture/FixtureContext";
import { FixtureStatisticsRow } from "@scores/ui/components/fixture/statisticsPanel/FixtureStatisticsRow";

export const FixtureStatisticsPanel = () => {
  const themeStyles = getTheme();
  const fixture = useFixture();

  const { statistics } = fixture;

  return (
    <Panel
      title={"Statistics"}
      icon={
        <IonIcon
          name={"stats-chart-sharp"}
          size={24}
          color={getPrimaryText()}
        />
      }
    >
      <View style={[styles.container]}>
        <View style={[styles.tableRow]}>
          <View style={[styles.rowHeader]}>
            <Image
              style={[styles.icon]}
              source={{
                uri: "https://media.api-sports.io/football/teams/33.png",
              }}
            />
            <Text style={[themeStyles.text]}>MAN</Text>
          </View>

          <View style={[styles.rowHeader, styles.reverseHeader]}>
            <Image
              style={[styles.icon, styles.reverseIcon]}
              source={{
                uri: "https://media.api-sports.io/football/teams/42.png",
              }}
            />
            <Text style={[themeStyles.text]}>ARS</Text>
          </View>
        </View>

        {/* @TODO: ordering statistics based on displayOrder */}
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
  borderedRow: {
    borderTopWidth: 1,
    borderTopColor: "#edeef0",
  },
  alternateRow: {
    backgroundColor: "rgb(63, 63, 63)",
  },
  rowHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  reverseHeader: {
    flexDirection: "row-reverse",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  reverseIcon: {
    marginLeft: 5,
    marginRight: 0,
  },
});
