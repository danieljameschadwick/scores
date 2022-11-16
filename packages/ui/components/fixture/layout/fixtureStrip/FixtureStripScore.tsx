import React from "react";
import { View, Text, Image } from "react-native";
import StyleSheet from "react-native-media-query";
import { useTheme } from "@scores/theme/utils/theme";

interface Props {
  // @TODO: add interface
  // team: TeamInterface;
  team: { name: string };
  isHome: boolean;
}

export const FixtureStripScore: React.FC<Props> = ({
  team,
  isHome = false,
}) => {
  const themeStyles = useTheme();
  const { name, logo, abbreviation, score } = team;

  return (
    <View style={[styles.container, isHome && homeStyles.container]}>
      <Text
        style={[
          styles.nameContainer,
          themeStyles.text,
          homeStyles.nameContainer,
        ]}
        dataSet={{ media: ids.nameContainer }}
      >
        {name}
      </Text>
      <Text
        style={[
          styles.nameContainer,
          styles.abbreviationContainer,
          themeStyles.text,
          isHome && [
            homeStyles.nameContainer,
            homeStyles.abbreviationContainer,
          ],
        ]}
        dataSet={{ media: ids.abbreviationContainer }}
      >
        {abbreviation}
      </Text>
      {logo && (
        <View
          style={[
            styles.iconContainer,
            isHome && homeStyles.iconContainer,
          ]}
        >
          <Image style={[styles.icon]} source={{ uri: logo }} />
        </View>
      )}
      <Text
        style={[
          styles.scoreContainer,
          themeStyles.text,
          isHome && homeStyles.scoreContainer,
        ]}
      >
        {score}
      </Text>
    </View>
  );
};

const { styles, ids } = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row-reverse",
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
    flexDirection: "row",
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
