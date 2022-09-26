import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { getTheme } from "@scores/theme/utils/theme";
import { getPrimaryText } from "@scores/theme/utils/variables";

interface Props {
  player: any;
  time: string;
  type: string;
  isHome: boolean;
}

export const FixtureStripSummaryEvent: React.FC<Props> = ({
  player,
  time,
  type,
  isAway = false,
}) => {
  const themeStyles = getTheme();
  const containerStyles = [styles.container];
  const iconStyles = [styles.icon];

  if (isAway) {
    containerStyles.push(styles.reverseContainer);
    iconStyles.push(styles.reversedIcon);
  }

  return (
    <View style={containerStyles}>
      <IonIcon
        style={iconStyles}
        name={"football"}
        color={getPrimaryText()}
      />

      <View
        key={`${player.id}-${time.elapsed}-${type}`}
        style={[styles.eventContainer]}
      >
        <Text style={[styles.playerNameText, themeStyles.text]}>
          {player.name}
        </Text>
        <Text style={[themeStyles.text]}>{`(${time.elapsed}")`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  reverseContainer: {
    flexDirection: "row-reverse",
  },
  icon: {
    marginLeft: 0,
    marginRight: 3,
  },
  reversedIcon: {
    marginLeft: 3,
    marginRight: 0,
  },
  eventContainer: {
    display: "flex",
    flexDirection: "row",
  },
  playerNameText: {
    marginRight: 3,
    color: "white",
    fontWeight: "700",
  },
});
