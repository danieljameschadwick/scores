import React from "react";
import { View, Text, StyleSheet } from "react-native-web";

interface Props {
  title: string;
  icon?: any | null;
  children: React.ReactNode;
}

export const Panel: React.FC<Props> = ({ title, icon = null, children }) => {
  const containerStyles = [styles.container];
  const headingStyles = [styles.headingContainer];

  if (!icon) {
    containerStyles.push(styles.containerWithoutIcon);
    headingStyles.push(styles.headingContainerWithoutIcon);
  }

  return (
    <View style={[containerStyles]}>
      <View style={[headingStyles]}>
        {icon && <View style={[styles.headingIcon]}>{icon}</View>}

        <Text style={[styles.headingText]}>{title}</Text>
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
