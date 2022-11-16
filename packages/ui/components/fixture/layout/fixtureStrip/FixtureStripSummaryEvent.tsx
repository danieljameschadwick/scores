import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useTheme } from "@scores/theme/utils/theme";
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
  const themeStyles = useTheme();

  return (
    <View style={[styles.container, isAway && styles.reverseContainer]}>
      <IonIcon
        style={[styles.icon, isAway && styles.reversedIcon]}
        name={"football"}
        color={getPrimaryText()}
        size={12}
      />

      <View
        key={`${player.id}-${time.elapsed}-${type}`}
        style={[styles.eventContainer]}
      >
        <Text style={[styles.playerNameText, themeStyles.text]}>
          {player.name}
        </Text>
        <Text
          style={[styles.elapsedText, themeStyles.text]}
        >{`(${time.elapsed}")`}</Text>
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
    alignItems: "center",
  },
  playerNameText: {
    marginRight: 3,
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
  elapsedText: {
    fontSize: 12,
  },
});
