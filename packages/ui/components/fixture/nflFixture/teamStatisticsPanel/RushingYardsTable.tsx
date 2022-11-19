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
    key: "carries",
    label: "CAR",
    accessor: "carries",
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
];

export const RushingYardsTable = ({ data }) => {
  return <Table config={config} data={data} />;
};
