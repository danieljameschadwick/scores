import React from "react";
import { View, Text, Image } from "react-native";
import StyleSheet from "react-native-media-query";
import { getTheme } from "@scores/theme/utils/theme";

interface Props {
  // @TODO: add interface
  // team: TeamInterface;
  team: { name: string };
  score: number;
  isHome: boolean;
}

export const FixtureStripScore: React.FC<Props> = ({
  team,
  score,
  isHome = false,
}) => {
  const themeStyles = getTheme();

  const containerStyles = [styles.container];
  const nameContainer = [styles.nameContainer];
  const abbreviationContainer = [styles.abbreviationContainer];
  const iconContainer = [styles.iconContainer];
  const scoreContainer = [styles.scoreContainer];

  if (isHome) {
    containerStyles.push(homeStyles.container);
    nameContainer.push(homeStyles.nameContainer);
    abbreviationContainer.push(homeStyles.abbreviationContainer);
    iconContainer.push(homeStyles.iconContainer);
    scoreContainer.push(homeStyles.scoreContainer);
  }

  const { name, logo, abbreviation } = team;

  return (
    <View style={containerStyles}>
      <Text
        style={[nameContainer, themeStyles.text]}
        dataSet={{ media: ids.nameContainer }}
      >
        {name}
      </Text>
      <Text
        style={[nameContainer, abbreviationContainer, themeStyles.text]}
        dataSet={{ media: ids.abbreviationContainer }}
      >
        {abbreviation}
      </Text>
      {logo && (
        <View style={[iconContainer]}>
          <Image style={[styles.icon]} source={{ uri: logo }} />
        </View>
      )}
      <Text style={[scoreContainer, themeStyles.text]}>{score}</Text>
    </View>
  );
};

const { styles, ids } = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 15,
    flexGrow: 1,
  },
  nameContainer: {
    fontSize: 18,
    fontWeight: "600",
    marginRight: 20,
    marginLeft: 0,
    "@media (max-width: 1100px)": {
      display: "none",
    },
  },
  abbreviationContainer: {
    "@media (min-width: 1100px)": {
      display: "none",
    },
  },
  iconContainer: {
    marginRight: 20,
    marginLeft: 0,
  },
  icon: {
    height: 30,
    width: 30,
  },
  scoreContainer: {
    width: 50,
    fontSize: 32,
    textAlign: "center",
    fontWeight: "700",
    marginRight: 20,
    marginLeft: 0,
  },
});

// @TODO: make one common container for margins
const { styles: homeStyles } = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },
  nameContainer: {
    marginRight: 0,
    marginLeft: 20,
  },
  abbreviationContainer: {},
  iconContainer: {
    marginRight: 0,
    marginLeft: 20,
  },
  scoreContainer: {
    marginRight: 0,
    marginLeft: 20,
  },
});
