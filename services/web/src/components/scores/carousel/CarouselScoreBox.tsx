import { GAME_RESULT } from "@src/enum/GameResult";
import React from "react";
import { View, Text, StyleSheet } from "react-native-web";

const ScoreBoxRow = ({ abbreviation, score, result }) => {
  const teamNameText = [styles.teamName];
  const goalsText = [styles.goalsText];

  if (result === GAME_RESULT.WIN) {
    teamNameText.push(styles.winText);
    goalsText.push(styles.winText);
  }

  if (result === GAME_RESULT.LOSS) {
    teamNameText.push(styles.lossText);
    goalsText.push(styles.lossText);
  }

  return (
    <View style={[styles.row]}>
      <Text style={teamNameText}>{abbreviation}</Text>
      <Text style={goalsText}>{score}</Text>
    </View>
  );
};

export const CarouselScoreBox = ({ home, away }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.status]}>FT</Text>
      <ScoreBoxRow {...home} />
      <ScoreBoxRow {...away} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    borderRightWidth: 1,
    borderRightColor: "rgb(215, 220, 224)",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(215, 220, 224)",
    backgroundColor: "#FFFFFF",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  status: {
    fontSize: 10,
    fontWeight: "600",
    marginBottom: 3,
  },
  teamName: {
    fontSize: 12,
  },
  goalsText: {
    fontSize: 12,
    fontWeight: "600",
  },
  winText: {
    fontWeight: "600",
  },
  lossText: {
    color: "#a5a6a7",
  },
});

const data = {
  fixture: {
    id: 868001,
    referee: "Paul Tierney, England",
    timezone: "UTC",
    date: "2022-09-04T15:30:00+00:00",
    timestamp: 1662305400,
    periods: {
      first: 1662305400,
      second: 1662309000,
    },
    venue: {
      id: 556,
      name: "Old Trafford",
      city: "Manchester",
    },
    status: {
      long: "Match Finished",
      short: "FT",
      elapsed: 90,
    },
  },
  league: {
    id: 39,
    name: "Premier League",
    country: "England",
    logo: "https://media.api-sports.io/football/leagues/39.png",
    flag: "https://media.api-sports.io/flags/gb.svg",
    season: 2022,
    round: "Regular Season - 6",
  },
  teams: {
    home: {
      id: 33,
      name: "Manchester United",
      logo: "https://media.api-sports.io/football/teams/33.png",
      winner: true,
    },
    away: {
      id: 42,
      name: "Arsenal",
      logo: "https://media.api-sports.io/football/teams/42.png",
      winner: false,
    },
  },
  goals: {
    home: 3,
    away: 1,
  },
  score: {
    halftime: {
      home: 1,
      away: 0,
    },
    fulltime: {
      home: 3,
      away: 1,
    },
    extratime: {
      home: null,
      away: null,
    },
    penalty: {
      home: null,
      away: null,
    },
  },
};
