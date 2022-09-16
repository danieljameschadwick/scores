import React from "react";
import { View, Text } from "react-native-web";
import StyleSheet from "react-native-media-query";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { GAME_RESULT } from "@src/enum/GameResult";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { getTheme } from "@scores/theme/utils/theme";

interface ScoreInterface {
  name: string;
  score: number;
  result: GAME_RESULT;
  logo?: string | null;
}

export const FixtureRow: React.FC<ScoreInterface> = ({
  name,
  score,
  result,
  logo = null,
}) => {
  const themeStyles = getTheme();
  const teamNameText = [styles.teamNameText];
  const scoreText = [styles.scoreText];

  return (
    <View style={[styles.container]}>
      <View style={[styles.teamNameContainer]}>
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

        <Text style={[teamNameText, themeStyles.text]} dataSet={{ media: ids.teamNameText }}>{name}</Text>
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
    margin: 2.5,
  },
  teamNameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 5,
    width: 20,
  },
  teamNameText: {
    fontSize: 16,
    "@media (max-width: 370px)": {
      maxWidth: 120,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
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
