import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAppDispatch, useAppSelector } from "@scores/state/hooks";
import { selectTheme, setTheme } from "@scores/state/reducer/ThemeReducer";
import { Theme } from "@scores/types/enum/Theme";
import { getTheme } from "@scores/theme/utils/theme";
import { RootStackParamList } from "../typing/typing";

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

export const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const themeStyles = getTheme();

  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      paddingTop: 15,
      paddingBottom: insets.bottom,
      paddingHorizontal: 15,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
    text: {
      fontSize: 16,
      marginRight: 5,
    },
  });

  const dispatchTheme = (isDarkMode: boolean) => {
    const theme = isDarkMode ? Theme.DARK_MODE : Theme.LIGHT_MODE;

    dispatch(setTheme(theme));
  };

  return (
    <View style={[styles.container, themeStyles.lightContainer]}>
      <View style={[styles.row, themeStyles.container]}>
        <Text style={[styles.text, themeStyles.text]}>Dark Mode</Text>

        <View>
          <Switch
            trackColor={{ false: "#FFFFFF", true: "green" }}
            thumbColor={"#FFFFFF"}
            ios_backgroundColor={"white"}
            onValueChange={dispatchTheme}
            value={theme === Theme.DARK_MODE}
          />
        </View>
      </View>
    </View>
  );
};
