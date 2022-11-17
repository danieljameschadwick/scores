import React from 'react';
import { ViewProps } from "react-native";
import { Panel } from "../../../layout/panel/Panel";
import { PassingYardsTable } from "./PassingYardsTable";

interface Props {
  title: string;
  style: ViewProps;
  passingData: any;
}

export const TeamStatisticsPanel: React.FC<Props> = ({ 
  title,
  style: propStyles,
  passingData,
}) => {
  return (
    <Panel
      title={title}
      style={propStyles}
    >
      {/* Passing Yards */}
      <PassingYardsTable data={passingData} />

      {/* Rushing Yards */}


      {/* Recieving Yards */}

    </Panel>
  );
};
