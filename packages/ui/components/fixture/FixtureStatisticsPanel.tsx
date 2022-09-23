import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Panel } from "@scores/ui/components/layout/panel/Panel";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { getTheme } from "@scores/theme/utils/theme";

export const FixtureStatisticsPanel = () => {
  const themeStyles = getTheme();

  return (
    <Panel
      title={"Statistics"}
      icon={<IonIcon name={"football"} size={24} color={getPrimaryText()} />}
    >
      <View style={[styles.container]}>
        <Text style={[themeStyles.text]}>
          {"Statistics being processed..."}
        </Text>
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
    paddingVertical: 10,
  },
});
