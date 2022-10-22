import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Panel } from "@scores/ui/components/layout/panel/Panel";
import { useTheme } from "@scores/theme/utils/theme";
import { getPrimaryText } from "@scores/theme/utils/variables";

export const CricketPanel = () => {
  const themeStyles = useTheme();

  return (
    <Panel
      title={"Cricket"}
      icon={
        <MaterialCommunityIcon
          name={"cricket"}
          size={24}
          color={getPrimaryText()}
        />
      }
      testID={"cricket-panel"}
    >
      <View style={[styles.container]}>
        <Text style={[themeStyles.text]}>No games available.</Text>
      </View>
    </Panel>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
});
