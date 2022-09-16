import React from "react";
import { View, Text, StyleSheet } from "react-native-web";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { getTheme } from "@scores/theme/utils/theme";
import { GAME_RESULT } from "@src/enum/GameResult";
import { getPrimaryText } from "@scores/theme/utils/variables";

interface Props {
  abbreviation: string;
  score: number;
  result: GAME_RESULT;
  logo?: string | null;
}

export const ScoreBoxRow: React.FC<Props> = ({
  abbreviation,
  score,
  result,
  logo = null,
}) => {
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
      <View style={[styles.teamContainer]}>
        <View style={[styles.iconContainer]}>
          {logo ? (
            <img src={logo} />
          ) : (
            <AntDesignIcon
              name={"questioncircle"}
              size={20}
              color={getPrimaryText()}
            />
          )}
        </View>
  
        <Text style={[teamNameText, themeStyles.text]}>{abbreviation}</Text>
      </View>
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
  teamContainer: {
    display: "flex",
    flexDirection: "row",
  },
  iconContainer: {
    width: 15,
    marginRight: 3,
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
