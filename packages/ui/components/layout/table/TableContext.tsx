import { createContext, useContext } from "react";

export const TableContext = createContext(null);
export const useTable = () => useContext(TableContext);
