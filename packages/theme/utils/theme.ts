import { Theme } from "@scores/types/enum/Theme";
import { darkStyles } from "@scores/theme/styles/darkStyles";
import { lightStyles } from "@scores/theme/styles/lightStyles";

export const getTheme = (theme: Theme = Theme.LIGHT_MODE) => {
  if (theme === Theme.DARK_MODE) {
    return darkStyles;
  }

  // default to LIGHT_MODE
  return lightStyles;
};
