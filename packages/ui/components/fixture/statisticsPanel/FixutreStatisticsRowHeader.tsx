import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getTheme } from "@scores/theme/utils/theme";

interface Props {
  logo: string;
  abbreviation: string;
}

export const FixtureStatisticsRowHeader: React.FC<Props> = ({
  logo,
  abbreviation,
  isAway,
}) => {
  const themeStyles = getTheme();
  const rowHeaderStyles = [styles.rowHeader];
  const iconStyles = [styles.icon];

  if (isAway) {
    rowHeaderStyles.push(styles.reverseHeader);
    iconStyles.push(styles.reverseIcon);
  }

  return (
    <View style={[rowHeaderStyles]}>
      <Image
        style={[iconStyles]}
        source={{
          uri: logo,
        }}
      />
      <Text style={[themeStyles.text]}>{abbreviation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  reverseHeader: {
    flexDirection: "row-reverse",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  reverseIcon: {
    marginLeft: 5,
    marginRight: 0,
  },
});
