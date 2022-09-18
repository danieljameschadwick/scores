import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Panel } from "@scores/ui/components/layout/panel/Panel";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { GAME_TYPE } from "@scores/types/enum/GameType";
import { PanelFixture } from "@scores/ui/components/layout/panel/fixture/PanelFixture";
import { getFixtures } from "@scores/http/services/football";
import { normaliseScores } from "@scores/http/utils/normaliseScores";

export const FootballPanel = () => {
  const [fixtures, setFixtures] = useState<{}>(null);

  useEffect(() => {
    const fetchData = async () => {
      setFixtures(normaliseScores(await getFixtures(), GAME_TYPE.FOOTBALL));
    };

    fetchData();
  }, []);

  return (
    <Panel
      title={"Football"}
      icon={<IonIcon name={"football"} size={24} color={getPrimaryText()} />}
    >
      <View style={[styles.container]}>
        {fixtures &&
          Object.keys(fixtures)
            .sort()
            .map((key) => {
              return fixtures[key].map((score) => {
                const { id } = score;

                return <PanelFixture key={id} {...score} />;
              });
            })}
      </View>
    </Panel>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  fixtureContainer: {},
});
