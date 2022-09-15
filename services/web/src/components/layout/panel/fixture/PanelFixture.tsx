import React from "react";
import { View, Text } from "react-native-web";
import StyleSheet from "react-native-media-query";
import { GAME_RESULT } from "@src/enum/GameResult";
import { FixtureRow } from "@src/components/layout/panel/fixture/FixtureRow";
import { getTheme } from "@scores/theme/utils/theme";

interface Score {
  name: string;
  abbreviation: string;
  score: number;
  result: GAME_RESULT;
}

interface Props {
  home: Score;
  away: Score;
}

export const PanelFixture: React.FC<Props> = ({ home, away }) => {
  const themeStyles = getTheme();

  return (
    <View style={[styles.container]} dataSet={{ media: ids.container }}>
      <View style={[styles.fixtureContainer]}>
        <FixtureRow {...home} />
        <FixtureRow {...away} />
      </View>

      <View style={[styles.statusContainer]}>
        <Text style={[themeStyles.text]}>FT</Text>
      </View>
    </View>
  );
};

const { styles, ids } = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    paddingVertical: 12,
    "@media (max-width: 667px)": {
      width: "100%",
    },
  },
  fixtureContainer: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    paddingRight: "5%",
  },
  statusContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "30%",
  },
});
