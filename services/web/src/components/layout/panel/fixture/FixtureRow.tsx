import React from "react";
import { View, Text } from "react-native-web";
import StyleSheet from "react-native-media-query";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { GAME_RESULT } from "@src/enum/GameResult";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { getTheme } from "@scores/theme/utils/theme";

interface Score {
  name: string;
  score: number;
  result: GAME_RESULT;
}

export const FixtureRow: React.FC<Score> = ({ name, score, result }) => {
  const themeStyles = getTheme();
  const teamNameText = [styles.teamNameText];
  const scoreText = [styles.scoreText];

  return (
    <View style={[styles.container]}>
      <View style={[styles.teamNameContainer]}>
        <View style={[styles.iconContainer]}>
          <AntDesignIcon
            name={"questioncircle"}
            size={"20"}
            color={getPrimaryText()}
          />
        </View>

        <Text style={[teamNameText, themeStyles.text]}>{name}</Text>
      </View>

      <View style={[styles.scoreContainer]}>
        <Text style={[scoreText, themeStyles.text]}>{score}</Text>
      </View>
    </View>
  );
};

const { styles, ids } = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  teamNameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 5,
  },
  teamNameText: {
    fontSize: 16,
  },
  scoreContainer: {
    width: 25,
  },
  scoreText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700",
  },
});
