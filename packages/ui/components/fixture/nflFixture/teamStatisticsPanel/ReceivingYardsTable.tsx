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
    key: "receptions",
    label: "REC",
    accessor: "receptions",
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
    key: "touchdowns",
    label: "TDS",
    accessor: "touchdowns",
    style: {
      center: true,
      width: 25,
    },
  },
  {
    key: "targets",
    label: "TGTS",
    accessor: "targets",
    style: {
      center: true,
      width: 35,
    },
  },
];

export const RecievingYardsTable = ({ data }) => {
  return <Table config={config} data={data} />;
};
