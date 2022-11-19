import React from "react";
import StyleSheet from "react-native-media-query";
import { Panel } from "../../../layout/panel/Panel";
import { Divider } from "./Divider";
import { PassingYardsTable } from "./PassingYardsTable";
import { RecievingYardsTable } from "./ReceivingYardsTable";
import { RushingYardsTable } from "./RushingYardsTable";

interface Props {
  title: string;
  passingData: any[];
  rushingData: any[];
  receivingData: any[];
}

export const TeamStatisticsPanel: React.FC<Props> = ({
  title,
  passingData = [],
  rushingData = [],
  receivingData = [],
}) => {
  return (
    <Panel title={title} style={panelStyles} dataSet={panelIds}>
      <PassingYardsTable data={passingData} />
      <Divider />
      <RushingYardsTable data={rushingData} />
      <Divider />
      <RecievingYardsTable data={receivingData} />
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
