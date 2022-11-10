import { useTheme } from "@scores/theme/utils/theme";
import React from "react";
import { View } from "react-native";
import StyleSheet from "react-native-media-query";
import { FixtureStrip } from "@scores/ui/components/fixture/nflFixture/fixtureStrip/FixtureStrip";

export const NFLFixture = () => {
  return (
    <>
      <View style={[styles.container]}>
        <FixtureStrip />
      </View>
    </>
  );
};

const { styles, ids } = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  pageContent: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    marginTop: 15,
    marginHorizontal: "auto",
    "@media (max-width: 990px)": {
      width: "100%",
      paddingHorizontal: 15,
    },
  },
  mainContent: {
    width: 660,
    paddingHorizontal: 10,
    "@media (max-width: 990px)": {
      width: "100%",
    },
  },
  sidebar: {
    width: 330,
    paddingHorizontal: 10,
    "@media (max-width: 990px)": {
      display: "none",
    },
  },
});
