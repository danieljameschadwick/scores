import React from "react";
import { Table } from "../../../layout/table/Table";

const config = [
  {
    key: "name",
    label: "",
    accessor: "name",
    style: {
      grow: true,
      limited: true,
    },
  },
  {
    key: "attempts",
    label: "ATT",
    accessor: "attempts",
    style: {
      center: true,
      limited: true,
    },
  },
  {
    key: "yards",
    label: "YDS",
    accessor: "yards",
    style: {
      center: true,
      limited: true,
    },
  },
  {
    key: "int",
    label: "INT",
    accessor: "interceptions",
    style: {
      center: true,
      limited: true,
    },
  },
  {
    key: "sacks",
    label: "SACKS",
    accessor: "sacks",
    style: {
      center: true,
      limited: true,
    },
  },
  {
    key: "qbr",
    label: "QBR",
    accessor: "qbr",
    style: {
      center: true,
      limited: true,
    },
  },
];

export const PassingYardsTable = ({ data }) => {
  return <Table config={config} data={data} />;
};
