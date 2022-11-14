import React from "react";
import { Panel } from "../../Panel";
import { DivisionTable } from "./DivisionTable";

interface Props {
  league: number;
  // @TODO: these are provided from the 3rd party,
  // will be normalised when we have our own normalised structure
  conference: string; // @TODO: these are provided from the 3rd party
  division: string;
}

export const DivisionTablePanel: React.FC<Props> = ({ league, conference, division }) => {
  return (
    <Panel title={"NFC West"} testID={"nfc-west-table-panel"}>
      <DivisionTable />
    </Panel>
  );
};
