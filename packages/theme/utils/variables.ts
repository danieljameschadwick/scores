import { useAppSelector } from "@scores/state/hooks";
import { selectTheme } from "@scores/state/reducer/ThemeReducer";
import { Theme } from "@scores/types/enum/Theme";
import { primaryText as darkPrimaryText } from "../variables/darkPalette";
import { primaryText } from "../variables/lightPalette";

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
