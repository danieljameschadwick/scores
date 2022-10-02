import { createContext, useContext } from "react";

export const FixtureContext = createContext(null);
export const useFixture = () => useContext(FixtureContext);
