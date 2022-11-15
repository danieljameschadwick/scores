import React from "react";
import { TableContext } from "@scores/ui/components/layout/table/TableContext";
import { TableHeader } from "@scores/ui/components/layout/table/TableHeader";
import { TableBody } from "@scores/ui/components/layout/table/TableBody";

export const Table = ({ config, data }) => {
  return (
    <TableContext.Provider value={config}>
      <TableHeader />

      <TableBody data={data} />
    </TableContext.Provider>
  )
};
