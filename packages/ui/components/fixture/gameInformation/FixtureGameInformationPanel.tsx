import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Panel } from "@scores/ui/components/layout/panel/Panel";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { useFixture } from "@scores/ui/state/FixtureContext";
import { getTheme } from "@scores/theme/utils/theme";
import { LoadingContainer } from "../loadingContainer/LoadingContainer";

export const FixtureGameInformationPanel = () => {
  const themeStyles = getTheme();
  const fixture = useFixture();
  const { home, away, statistics } = fixture;

  return (
    <Panel
      title={"Game Information"}
      icon={
        <MaterialCommunityIcon
          name={"stadium"}
          size={24}
          color={getPrimaryText()}
        />
      }
    >
      <View style={[styles.container]}>
        <LoadingContainer />
      </View>
    </Panel>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 8,
  },
  text: {
    paddingBottom: 10,
  },
});
