import React from "react";
import { View, Text, StyleSheet } from "react-native-web";
import { getTheme } from "@scores/theme/utils/theme";
import { ScoreBoxRow } from "@src/components/scores/carousel/scoreBox/ScoreBoxRow";
import { GAME_RESULT } from "@src/enum/GameResult";

interface Score {
  abbreviation: string;
  score: number;
  result: GAME_RESULT;
}

interface Props {
  home: Score;
  away: Score;
}

export const CarouselScoreBox: React.FC<Props> = ({ home, away }) => {
  const themeStyles = getTheme();

  return (
    <View style={[styles.container, themeStyles.darkContainer]}>
      <Text style={[styles.status, themeStyles.text]}>FT</Text>
      <ScoreBoxRow {...home} />
      <ScoreBoxRow {...away} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    borderRightWidth: 1,
    backgroundColor: "#FFFFFF",
  },
  status: {
    fontSize: 10,
    fontWeight: "600",
    marginBottom: 3,
  },
});
