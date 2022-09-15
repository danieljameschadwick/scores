import React from "react";
import { StyleSheet, View } from "react-native-web";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Panel } from "@src/components/layout/panel/Panel";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { GAME_TYPE } from "@src/enum/GameType";
import { PanelFixture } from "@src/components/layout/panel/fixture/PanelFixture";

import footballFixtures from "@src/mocks/footballFixtures";
import { normaliseScores } from "@src/utils/scores/normaliseScores";

export const FootballPanel = () => {
  const fixtures = normaliseScores(footballFixtures, GAME_TYPE.FOOTBALL);

  return (
    <Panel
      title={"Football"}
      icon={<IonIcon name={"football"} size={24} color={getPrimaryText()} />}
    >
      <View style={[styles.container]}>
        {Object.keys(fixtures)
          .sort()
          .map((key) => {
            return (
              <>
                {fixtures[key].map((score) => {
                  const { id } = score;

                  return <PanelFixture key={id} {...score} />;
                })}
              </>
            );
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
});
