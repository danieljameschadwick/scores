import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
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
  const iconContainer = [styles.iconContainer];
  const scoreContainer = [styles.scoreContainer];

  if (isHome) {
    containerStyles.push(homeStyles.container);
    nameContainer.push(homeStyles.nameContainer);
    iconContainer.push(homeStyles.iconContainer);
    scoreContainer.push(homeStyles.scoreContainer);
  }

  const { name, logo } = team;

  return (
    <View style={containerStyles}>
      <Text style={[nameContainer, themeStyles.text]}>{name}</Text>
      {logo && (
        <View style={[iconContainer]}>
          <Image style={[styles.icon]} source={{ uri: logo }} />
        </View>
      )}
      <Text style={[scoreContainer, themeStyles.text]}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

// just make one common container
const homeStyles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
  },
  nameContainer: {
    marginRight: 0,
    marginLeft: 20,
  },
  iconContainer: {
    marginRight: 0,
    marginLeft: 20,
  },
  scoreContainer: {
    marginRight: 0,
    marginLeft: 20,
  },
});
