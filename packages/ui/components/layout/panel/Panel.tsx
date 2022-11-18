import React from "react";
import { View, Text, StyleSheet, ViewProps } from "react-native";
import { useTheme } from "@scores/theme/utils/theme";

interface Props {
  title: string;
  icon?: any | null; // @TODO: typing
  testID?: string | null;
  styles: ViewProps;
  children: React.ReactNode;
}

export const Panel: React.FC<Props> = ({
  title,
  icon = null,
  testID = "panel",
  style: propStyles = null,
  dataSet: propDataSet = null,
  children,
}) => {
  const themeStyles = useTheme();

  return (
    <View
      style={[
        styles.container,
        themeStyles.mediumContainer,
        propStyles?.container,
        !icon && styles.containerWithoutIcon,
      ]}
      dataSet={{ media: propDataSet?.container }}
      testID={testID}
    >
      <View
        style={[
          styles.headingContainer,
          !icon && styles.headingContainerWithoutIcon,
        ]}
      >
        {icon && <View style={[styles.headingIcon]}>{icon}</View>}

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
