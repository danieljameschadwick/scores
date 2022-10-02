export enum GAME_STATUS {
  TBD = "TBD", // Time To Be Defined
  NS = "NS", // Not Started
  "1H" = "1H", // First Half, Kick Off
  HT = "HT", // Halftime
  "2H" = "2H", // Second Half, 2nd Half Started
  ET = "ET", // Extra Time
  P = "P", // Penalty In Progress
  FT = "FT", // Match Finished
  AET = "AET", // Match Finished After Extra Time
  PEN = "PEN", // Match Finished After Penalty
  BT = "BT", // Break Time (in Extra Time)
  SUSP = "SUSP", // Match Suspended
  INT = "INT", // Match Interrupted
  PST = "PST", // Match Postponed
  CANC = "CANC", // Match Cancelled
  ABD = "ABD", // Match Abandoned
  AWD = "AWD", // Technical Loss
  WO = "WO", // WalkOver
  LIVE = "LIVE", // In Progress
};
