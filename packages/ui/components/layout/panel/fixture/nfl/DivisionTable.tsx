import React from "react";
import { Table } from "@scores/ui/components/layout/table/Table";

const mockData = [
  {
    name: "Seattle Seahawks",
    wins: 6,
    losses: 4,
    draws: 0,
  },
  {
    name: "San Francisco 49ers",
    wins: 5,
    losses: 4,
    draws: 0,
  },
  {
    name: "Arizona Cardinals",
    wins: 4,
    losses: 6,
    draws: 0,
  },
  {
    name: "Los Angeles Rams",
    wins: 3,
    losses: 6,
    draws: 0,
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
    key: "wins",
    label: "W",
    accessor: "wins",
  },
  {
    key: "losses",
    label: "L",
    accessor: "losses",
  },
  {
    key: "draws",
    label: "T",
    accessor: "draws",
  },
];

export const DivisionTable = () => {
  const data = mockData;

  return <Table data={data} config={config} showIndex={true} />;
};
