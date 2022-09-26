import React from "react";
import { View } from "react-native";
import StyleSheet from "react-native-media-query";
import { getTheme } from "@scores/theme/utils/theme";
import { useFixture } from "@scores/ui/components/fixture/FixtureContext";
import { FixtureStripSummaryEvent } from "@scores/ui/components/fixture/FixtureStripSummaryEvent";

enum EVENT_TYPE {
  GOAL = "goal",
}

// @TODO: hook into summary
const getEventIcon = (type: EVENT_TYPE) => {
  if (type === EVENT_TYPE.GOAL) {
    // return <Icon id="goal" />
  }

  return null;
};

export const FixtureStripSummary = () => {
  const fixture = useFixture();
  const themeStyles = getTheme();

  const {
    events: { homeEvents = [], awayEvents = [] } = {
      homeEvents: [],
      awayEvents: [],
    },
  } = fixture;

  if (homeEvents.length === 0 && awayEvents.length === 0) {
    return null;
  }

  return (
    <View style={[styles.container, themeStyles.darkContainer]}>
      <View>
        {awayEvents
          .filter(({ type }) => type === "Goal")
          .map(({ time, player, type }) => (
            <FixtureStripSummaryEvent
              key={`${player.id}-${time.elapsed}-${type}`}
              player={player}
              time={time}
              type={type}
            />
          ))}
      </View>

      <View
        style={[styles.splitContainer]}
        dataSet={{ media: ids.splitContainer }}
      />

      <View>
        {homeEvents
          .filter(({ type }) => type === "Goal")
          .map(({ time, player, type }) => (
            <FixtureStripSummaryEvent
              key={`${player.id}-${time.elapsed}-${type}`}
              player={player}
              time={time}
              type={type}
            />
          ))}
      </View>
    </View>
  );
};

const { styles, ids } = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 15,
  },
  splitContainer: {
    width: 50,
    "@media (max-width: 667px)": {
      width: 25,
    },
  },
  eventContainer: {
    display: "flex",
    flexDirection: "row",
  },
  playerNameText: {
    marginRight: 3,
    color: "white",
    fontWeight: 700,
  },
});
