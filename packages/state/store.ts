import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper"
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AsyncStorage } from "react-native";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import themeReducer from "./reducer/ThemeReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, themeReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  AppState,
  unknown,
  Action<string>>;

export const wrapper = createWrapper(() => store);

export default store;
