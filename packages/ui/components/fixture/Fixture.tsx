import React from "react";
import { StyleSheet, View } from "react-native";
import { GameInterface } from "@scores/types/interfaces/GameInterface";
import { FixtureStrip } from "@scores/ui/components/fixture/FixtureStrip";
import { FixtureContext } from "@scores/ui/components/fixture/FixtureContext";

interface Props {
  fixture: GameInterface;
}

export const Fixture: React.FC<Props> = ({ fixture }) => {
  return (
    <FixtureContext.Provider value={fixture}>
      <View style={[styles.container]}>
        <FixtureStrip />
      </View>
    </FixtureContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
