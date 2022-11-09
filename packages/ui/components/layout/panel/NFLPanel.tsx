import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Panel } from "@scores/ui/components/layout/panel/Panel";
import { useTheme } from "@scores/theme/utils/theme";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { Game } from "@scores/types/enum/Game";
import { normaliseScores } from "@scores/http/utils/normaliseScores";
import { getFixtures } from "@scores/http/services/football";
import { Month } from "@scores/types/enum/Month";
import { PanelFixture } from "./fixture/PanelFixture";

export const NFLPanel = () => {
  const themeStyles = useTheme();
  const [fixtures, setFixtures] = useState<{}>(null);

  useEffect(() => {
    const fetchData = async () => {
      setFixtures(
        // @TODO: default fixtures
        normaliseScores(await getFixtures(Month.SEPTEMBER, Game.NFL), Game.NFL)
      );
    };

    fetchData();
  }, []);

  if (!fixtures) {
    return (
      <Panel
        title={"NFL"}
        icon={
          <MaterialCommunityIcon
            name={"football"}
            size={24}
            color={getPrimaryText()}
          />
        }
        testID={"nfl-panel"}
      >
        <View style={[styles.container]}>
          <Text style={[themeStyles.text]} testID={"loading"}>
            Loading...
          </Text>
        </View>
      </Panel>
    );
  }

  console.log(fixtures);

  return (
    <Panel
      title={"NFL"}
      icon={
        <MaterialCommunityIcon
          name={"football"}
          size={24}
          color={getPrimaryText()}
        />
      }
      testID={"nfl-panel"}
    >
      {fixtures && (
        <View style={[styles.container]} testID={"fixtures"}>
          {Object.keys(fixtures)
            .sort()
            .map((key) => {
              return fixtures[key].map((score) => {
                const { id } = score;

                return <PanelFixture key={id} {...score} />;
              });
            })}
        </View>
      )}
    </Panel>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
