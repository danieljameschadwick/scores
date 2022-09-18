import { useAppSelector } from "@scores/state/hooks";
import { selectTheme } from "@scores/state/reducer/ThemeReducer";
import { Theme } from "@scores/types/enum/Theme";
import { primaryText as darkPrimaryText, primaryContainer as darkPrimaryContainer } from "../variables/darkPalette";
import { primaryText, primaryBorderColor, primaryContainer } from "../variables/lightPalette";

/**
 * // @TODO: refactor to map
 * 
 * need some sort of solution to not have this
 * repeated pattern for all vars, maybe a mapper
 */
export const getPrimaryText = (): string => {
  const theme = useAppSelector(selectTheme);

  if (theme === Theme.DARK_MODE) {
    return darkPrimaryText;
  }

  return primaryText;
};

export const getPrimaryContainer = (): string => {
  const theme = useAppSelector(selectTheme);

  if (theme === Theme.DARK_MODE) {
    return darkPrimaryContainer;
  }

  return primaryContainer;
};
