import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import SharedGroupPreferences from "react-native-shared-group-preferences";
import { store, persistor } from "@scores/state/store";
import { Navigator } from "./src/navigation/Navigator";

const appGroupIdentifier = "com.group.scores";

const widgetData = {
  date: Date.parse("2022-09-04T15:30:00+00:00"),
  home: {
    abbreviation: "MUN",
    score: 3,
  },
  away: {
    abbreviation: "ARS",
    score: 1,
  },
  result: "FT",
};

const setupWidgets = () => {
  try {
    SharedGroupPreferences.setItem(
      "ScoresWidget", // this is a key to pull from later in Swift
      widgetData,
      appGroupIdentifier
    );
  } catch (error) {
    console.log(error);
  }
};

const App: React.FC = () => {
  // @TODO: integrate widgets
  // setupWidgets();

  return (
    <SafeAreaProvider style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar />

          <Navigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
