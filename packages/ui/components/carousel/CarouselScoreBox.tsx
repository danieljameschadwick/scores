import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getTheme } from "@scores/theme/utils/theme";
import { ScoreBoxRow } from "@scores/ui/components/carousel/scoreBox/ScoreBoxRow";
import { GAME_RESULT } from "@scores/types/enum/GameResult";

interface ScoreInterface {
  abbreviation: string;
  score: number;
  result: GAME_RESULT;
  logo?: string | null;
}

interface Props {
  home: ScoreInterface;
  away: ScoreInterface;
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
