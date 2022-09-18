import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getTheme } from "@scores/theme/utils/theme";

interface Props {
  title: string;
  icon?: any | null;
  children: React.ReactNode;
}

export const Panel: React.FC<Props> = ({ title, icon = null, children }) => {
  const themeStyles = getTheme();
  const containerStyles = [styles.container];
  const headingStyles = [styles.headingContainer];

  if (!icon) {
    containerStyles.push(styles.containerWithoutIcon);
    headingStyles.push(styles.headingContainerWithoutIcon);
  }

  return (
    <View style={[containerStyles, themeStyles.mediumContainer]}>
      <View style={[headingStyles]}>
        {icon && <View style={[styles.headingIcon, themeStyles.text]}>{icon}</View>}

        <Text style={[styles.headingText, themeStyles.text]}>{title}</Text>
      </View>

      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 10,
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  containerWithoutIcon: {
    padding: 16,
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#dcdddf",
    paddingBottom: 5,
    marginBottom: 10,
  },
  headingContainerWithoutIcon: {
    paddingBottom: 10,
  },
  headingIcon: {
    marginRight: 3,
  },
  headingText: {
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
  },
});
