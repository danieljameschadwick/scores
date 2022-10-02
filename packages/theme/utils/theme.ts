import { Theme } from "@scores/types/enum/Theme";
import { darkStyles } from "@scores/theme/styles/darkStyles";
import { lightStyles } from "@scores/theme/styles/lightStyles";
import { useAppSelector } from "@scores/state/hooks";
import { selectTheme } from "@scores/state/reducer/ThemeReducer";
import { getPrimaryText } from "./variables";

export const getTheme = () => {
  const theme = useAppSelector(selectTheme);

  if (theme === Theme.DARK_MODE) {
    return darkStyles;
  }

  // default to LIGHT_MODE
  return lightStyles;
};

/**
 * Experimental for not redoing the getPrimaryText hook
 */
export const getThemes = () => {
  const theme = useAppSelector(selectTheme);

  if (theme === Theme.DARK_MODE) {
    return {
      themeStyles: darkStyles,
      primaryText: getPrimaryText(), // @TODO: we're reusing the same check as above
    };
  }

  // default to LIGHT_MODE
  return {
    themeStyles: lightStyles,
    primaryText: getPrimaryText(), // @TODO: we're reusing the same check as above
  };
};
