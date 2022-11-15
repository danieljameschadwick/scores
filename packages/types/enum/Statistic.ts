export enum Statistic {
  // GameType.FOOTBALL
  FOULS = "fouls",
  YELLOW_CARDS = "yellowCards",
  RED_CARDS = "redCards",
  OFFSIDES = "offsides",
  CORNER_KICKS = "cornerKicks",
  GOALKEEPER_SAVES = "goalkeeperSaves",
  POSSESSION = "ballPossession",
  SHOTS_ON_TARGET = "shotsonGoal",
  TOTAL_SHOTS = "totalShots",

  // GameType.NFL
  FIRST_DOWNS = "firstDowns",
  PLAYS = "plays",
  YARDS = "yards",
  PASSING = "passing",
  RUSHINGS = "rushings",
  TURNOVERS = "turnovers",
  INTERCEPTIONS = "interceptions",
  PENALTIES = "penalties",
};

// @TODO: split statistic keys per game, as some games have similar stat keys e.g. Possession
// POSSESSION = "possession", 
