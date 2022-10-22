import React from "react";
import { View, Text, Image } from "react-native";
import StyleSheet from "react-native-media-query";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { GAME_RESULT } from "@scores/types/enum/GameResult";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { useTheme } from "@scores/theme/utils/theme";

interface ScoreInterface {
  name: string;
  score: number;
  result: GAME_RESULT;
  logo?: string | null;
  testID?: string;
}

export const FixtureRow: React.FC<ScoreInterface> = ({
  name,
  score,
  result,
  logo = null,
  testID = "fixture-row",
}) => {
  const themeStyles = useTheme();
  const teamNameText = [styles.teamNameText];
  const scoreText = [styles.scoreText];

  return (
    <View style={[styles.container]} testID={testID}>
      <View style={[styles.teamNameContainer]}>
        <View style={[styles.iconContainer]}>
          {logo ? (
            <Image style={[styles.icon]} source={{ uri: logo }} />
          ) : (
            <AntDesignIcon
              name={"questioncircle"}
              size={20}
              color={getPrimaryText()}
            />
          )}
        </View>

        <Text
          style={[teamNameText, themeStyles.text]}
          dataSet={{ media: ids.teamNameText }}
          testID={"name"}
        >
          {name}
        </Text>
      </View>

      <View style={[styles.scoreContainer]}>
        <Text style={[scoreText, themeStyles.text]} testID={"score"}>
          {score}
        </Text>
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
  },
  icon: {
    height: 20,
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
