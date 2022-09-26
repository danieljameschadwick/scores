import React from "react";
import { View } from "react-native";
import StyleSheet from "react-native-media-query";
import { GameInterface } from "@scores/types/interfaces/GameInterface";
import { normaliseFootball } from "@scores/http/utils/normaliseScores";
import { FixtureStrip } from "@scores/ui/components/fixture/FixtureStrip";
import { FixtureContext } from "@scores/ui/components/fixture/FixtureContext";
import { FixtureStatisticsPanel } from "@scores/ui/components/fixture/statisticsPanel/FixtureStatisticsPanel";

interface Props {
  fixture: GameInterface;
}

export const Fixture: React.FC<Props> = ({ fixture }) => {
  return (
    <FixtureContext.Provider value={normaliseFootball(fixture)}>
      <View style={[styles.container]}>
        <FixtureStrip />
      </View>
      
      <View style={[styles.pageContent]} dataSet={{ media: ids.pageContent }}>
        <FixtureStatisticsPanel />
      </View>
    </FixtureContext.Provider>
  );
};

const {styles, ids} = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  pageContent: {
    width: 660,
    marginTop: 15,
    marginHorizontal: "auto",
    "@media (max-width: 660px)": {
      width: "100%",
      paddingHorizontal: 15,
    },
  },
});
