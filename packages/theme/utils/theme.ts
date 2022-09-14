import { Theme } from "@scores/types/enum/Theme";
import { darkStyles } from "@scores/theme/styles/darkStyles";
import { lightStyles } from "@scores/theme/styles/lightStyles";
import { useAppSelector } from "@scores/state/hooks";
import { selectTheme } from "@scores/state/reducer/ThemeReducer";

export const getTheme = () => {
  const theme = useAppSelector(selectTheme);

  if (theme === Theme.DARK_MODE) {
    return darkStyles;
  }

  // default to LIGHT_MODE
  return lightStyles;
};
