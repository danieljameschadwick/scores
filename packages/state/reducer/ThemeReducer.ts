import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@scores/state/store";
import { Theme } from "@scores/types/enum/Theme";

export interface ThemeState {
  theme: Theme,
  status: "idle" | "loading" | "failed",
}

const initialState: ThemeState = {
  theme: Theme.LIGHT_MODE,
  status: "idle",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: AppState) => state.theme;

export default themeSlice.reducer;
