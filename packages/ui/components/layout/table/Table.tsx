import React from "react";
import { TableContext } from "@scores/ui/components/layout/table/TableContext";
import { TableHeader } from "@scores/ui/components/layout/table/TableHeader";
import { TableBody } from "@scores/ui/components/layout/table/TableBody";

interface Props {
  config: any; // @TODO: type config
  data: any; // @TODO: add generic
  showIndex: boolean; // @TODO: add to context
}

export const Table: React.FC<Props> = ({
  config,
  data,
  showIndex = false,
  spaced = false,
}) => {
  return (
    <TableContext.Provider value={config}>
      <TableHeader showIndex={showIndex} spaced={spaced} />

      <TableBody data={data} showIndex={showIndex} spaced={spaced} />
    </TableContext.Provider>
  );
};
