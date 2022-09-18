import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import IonIcon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store, { persistor } from "@scores/state/store";

import { HomeScreen } from "./src/screens/HomeScreen";
import { SettingsScreen } from "./src/screens/SettingsScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar />

          <NavigationContainer>
            <Stack.Navigator initialRouteName="Index">
              <Stack.Screen
                name="Index"
                component={HomeScreen}
                options={({ navigation }) => ({
                  title: "Home",
                  headerRight: () => (
                    <IonIcon
                      onPress={() => navigation.navigate("Settings")}
                      name="cog"
                      size={24}
                      color="#000"
                    />
                  ),
                })}
              />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              {/* // @TODO: implement login in app */}
              {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
              {/* // @TODO: implement registration in app */}
              {/*<Stack.Screen name="Register" component={RegisterScreen} />*/}
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
