import React from "react";
import { Panel } from "../Panel";
import { LeagueTable } from "./LeagueTable";

interface Props {
  league: number;
}

export const LeagueTablePanel: React.FC<Props> = ({ league }) => {
  return (
    <Panel title={"English Premier League"} testID={"league-table-panel"}>
      <LeagueTable />
    </Panel>
  );
};
