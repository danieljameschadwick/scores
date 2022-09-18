import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  getPrimaryContainer,
  getPrimaryText,
} from "@scores/theme/utils/variables";
import IonIcon from "react-native-vector-icons/Ionicons";

import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: getPrimaryContainer(),
    },
    headerTitleStyle: {
      color: getPrimaryText(),
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" screenOptions={screenOptions}>
        <Stack.Screen
          name="Index"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Home",
            headerRight: () => (
              <IonIcon
                onPress={() => navigation.navigate("Settings")}
                name={"cog"}
                size={24}
                color={getPrimaryText()}
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
  );
};
