import React from "react";
import { Table } from "@scores/ui/components/layout/table/Table";

const mockData = [
  {
    name: "Arsenal",
    points: 28,
  },
  {
    name: "Manchester City",
    points: 26,
  },
  {
    name: "Tottenham",
    points: 23,
  },
  {
    name: "Newcastle",
    points: 21,
  },
  {
    name: "Chelsea",
    points: 21,
  },
  {
    name: "Manchester United",
    points: 20,
  },
  {
    name: "Fulham",
    points: 18,
  },
  {
    name: "Liverpool",
    points: 16,
  },
  {
    name: "Brighton & Hove Albion",
    points: 15,
  },
  {
    name: "West Ham United",
    points: 14,
  },
  {
    name: "Brentford",
    points: 14,
  },
  {
    name: "Everton",
    points: 13,
  },
  {
    name: "Crystal Palace",
    points: 13,
  },
  {
    name: "AFC Bournemouth",
    points: 13,
  },
  {
    name: "Aston Villa",
    points: 12,
  },
  {
    name: "Southampton",
    points: 12,
  },
  {
    name: "Leicester City",
    points: 11,
  },
  {
    name: "Leeds United",
    points: 9,
  },
  {
    name: "Wolverhampton Wanderers",
    points: 9,
  },
  {
    name: "Nottingham Forest",
    points: 9,
  },
];

const config = [
  {
    key: "name",
    label: "Team",
    accessor: "name",
    style: {
      grow: true,
    },
  },
  {
    key: "points",
    label: "PTS",
    accessor: "points",
  },
];

export const LeagueTable = () => {
  const data = mockData;

  return <Table data={data} config={config} showIndex={true} />;
};
