import React from "react";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "@scores/theme/utils/theme";
import { GAME_STATUS } from "@scores/types/enum/GameStatus";
import { isGameNotStartedOrFinished } from "@scores/ui/util/game/isGameNotStartedOrFinished";
import { getFormattedLiveMatchStatus } from "@scores/ui/util/game/getFormattedLiveMatchStatus";
import { useFixture } from "@scores/ui/state/FixtureContext";
import { formatDateTimeString } from "@scores/ui/util/dateTime/formatDateTimeString";

export const ScoreBoxStatus: React.FC = () => {
  const { status, date } = useFixture();
  const themeStyles = useTheme();

  const isInProgress =
    !isGameNotStartedOrFinished(status) || status === GAME_STATUS.PST;

  if (status === GAME_STATUS.NS) {
    return (
      <Text
        style={[
          styles.status,
          themeStyles.text,
          isInProgress && styles.inProgressStatus,
        ]}
      >
        {formatDateTimeString(date, "hh:mm")}
      </Text>
    );
  }

  return (
    <Text
      style={[
        styles.status,
        themeStyles.text,
        isInProgress && styles.inProgressStatus,
      ]}
    >
      {getFormattedLiveMatchStatus(status)}
    </Text>
  );
};

const styles = StyleSheet.create({
  status: {
    fontSize: 10,
    fontWeight: "600",
    marginBottom: 5,
  },
  inProgressStatus: {
    color: "#d00",
  },
});
