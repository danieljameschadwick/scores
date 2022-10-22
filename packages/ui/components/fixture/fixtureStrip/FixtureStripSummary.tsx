import React from "react";
import { View } from "react-native";
import StyleSheet from "react-native-media-query";
import { useTheme } from "@scores/theme/utils/theme";
import { useFixture } from "@scores/ui/state/FixtureContext";
import { FixtureStripSummaryEvent } from "@scores/ui/components/fixture/fixtureStrip/FixtureStripSummaryEvent";

enum EVENT_TYPE {
  GOAL = "goal",
};

// @TODO: hook into summary
const getEventIcon = (type: EVENT_TYPE) => {
  if (type === EVENT_TYPE.GOAL) {
    // return <Icon id="goal" />
  }

  return null;
};

export const FixtureStripSummary = () => {
  const fixture = useFixture();
  const themeStyles = useTheme();

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
    <View style={[themeStyles.darkContainer]}>
      <View style={[styles.container]} dataSet={{ media: ids.container }}>
        <View>
          {awayEvents
            .filter(({ type }) => type === "Goal")
            .map(({ time, player, type }) => (
              <FixtureStripSummaryEvent
                key={`${player.id}-${time.elapsed}-${type}`}
                player={player}
                time={time}
                type={type}
                isAway={true}
              />
            ))}
        </View>
  
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
    </View>
  );
};

const { styles, ids } = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    padding: 15,
    marginHorizontal: "auto",
    width: "100%",
    "@media (min-width: 660px)": {
      width: 660,
      paddingHorizontal: 0,
    },
  },
  eventContainer: {
    display: "flex",
    flexDirection: "row",
  },
  playerNameText: {
    marginRight: 3,
    fontWeight: "700",
  },
});
