import React from "react";
import StyleSheet from "react-native-media-query";
import { ViewProps } from "react-native";
import { Panel } from "../../../layout/panel/Panel";
import { PassingYardsTable } from "./PassingYardsTable";

interface Props {
  title: string;
  passingData: any;
}

export const TeamStatisticsPanel: React.FC<Props> = ({
  title,
  passingData,
}) => {
  return (
    <Panel title={title} style={panelStyles} dataSet={panelIds}>
      {/* Passing Yards */}
      <PassingYardsTable data={passingData} />

      {/* Rushing Yards */}

      {/* Recieving Yards */}
    </Panel>
  );
};

const { styles: panelStyles, ids: panelIds } = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginVertical: 4,
    marginHorizontal: 4,
    "@media (min-width: 990px)": {
      width: 310,
    },
  },
});
