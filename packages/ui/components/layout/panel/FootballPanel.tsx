import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Panel } from "@scores/ui/components/layout/panel/Panel";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { GAME_TYPE } from "@scores/types/enum/GameType";
import { PanelFixture } from "@scores/ui/components/layout/panel/fixture/PanelFixture";
import { getFixtures } from "@scores/http/services/football";
import { normaliseScores } from "@scores/http/utils/normaliseScores";
import { useTheme } from "@scores/theme/utils/theme";

export const FootballPanel = () => {
  const themeStyles = useTheme();
  const [fixtures, setFixtures] = useState<{}>(null);

  useEffect(() => {
    const fetchData = async () => {
      setFixtures(normaliseScores(await getFixtures(), GAME_TYPE.FOOTBALL));
    };

    fetchData();
  }, []);

  if (!fixtures) {
    return (
      <Panel
        title={"Football"}
        icon={<IonIcon name={"football"} size={24} color={getPrimaryText()} />}
        testID={"football-panel"}
      >
        <View style={[styles.container]}>
          <Text style={[themeStyles.text]} testID={"loading"}>
            Loading
          </Text>
        </View>
      </Panel>
    );
  }

  return (
    <Panel
      title={"Football"}
      icon={<IonIcon name={"football"} size={24} color={getPrimaryText()} />}
      testID={"football-panel"}
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
