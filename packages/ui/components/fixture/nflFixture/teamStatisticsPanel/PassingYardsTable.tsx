import React from "react";
import { Table } from "../../../layout/table/Table";

const config = [
  {
    key: "name",
    label: "",
    accessor: "name",
    style: {
      grow: true,
      key: true,
    },
  },
  {
    key: "attempts",
    label: "ATT",
    accessor: "attempts",
    style: {
      center: true,
      width: 40,
    },
  },
  {
    key: "yards",
    label: "YDS",
    accessor: "yards",
    style: {
      center: true,
      width: 30,
    },
  },
  {
    key: "int",
    label: "INT",
    accessor: "interceptions",
    style: {
      center: true,
      width: 25,
    },
  },
  {
    key: "sacks",
    label: "SACKS",
    accessor: "sacks",
    style: {
      center: true,
      width: 45,
    },
  },
  {
    key: "qbr",
    label: "QBR",
    accessor: "qbr",
    style: {
      center: true,
      width: 30,
    },
  },
];

export const PassingYardsTable = ({ data }) => {
  return <Table config={config} data={data} />;
};
