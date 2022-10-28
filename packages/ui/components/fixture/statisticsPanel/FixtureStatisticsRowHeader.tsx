import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@scores/theme/utils/theme";

interface Props {
  logo: string;
  abbreviation: string;
}

export const FixtureStatisticsRowHeader: React.FC<Props> = ({
  logo,
  abbreviation,
  isAway,
}) => {
  const themeStyles = useTheme();

  return (
    <View style={[styles.rowHeader, isAway && styles.reverseHeader]}>
      <Image
        style={[styles.icon, isAway && styles.reverseIcon]}
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
