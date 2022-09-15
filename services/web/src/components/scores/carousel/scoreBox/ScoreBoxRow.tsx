import React from "react";
import { getTheme } from "@scores/theme/utils/theme";
import { GAME_RESULT } from "@src/enum/GameResult";
import { View, Text, StyleSheet } from "react-native-web";

interface Props {
  abbreviation: string;
  score: number;
  result: GAME_RESULT;
}

export const ScoreBoxRow: React.FC<Props> = ({ abbreviation, score, result }) => {
  const themeStyles = getTheme();
  const teamNameText = [styles.teamName];
  const goalsText = [styles.goalsText];

  if (result === GAME_RESULT.WIN) {
    teamNameText.push(styles.winText);
    goalsText.push(styles.winText);
  }

  if (result === GAME_RESULT.LOSS) {
    teamNameText.push(styles.lossText);
    goalsText.push(styles.lossText);
  }

  return (
    <View style={[styles.row]}>
      <Text style={[teamNameText, themeStyles.text]}>{abbreviation}</Text>
      <Text style={[goalsText, themeStyles.text]}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  teamName: {
    fontSize: 12,
  },
  goalsText: {
    fontSize: 12,
    fontWeight: "600",
  },
  winText: {
    fontWeight: "700",
  },
  lossText: {
    color: "#a5a6a7",
  },
});
