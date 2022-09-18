import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useAppDispatch, useAppSelector } from "@scores/state/hooks";
import { selectTheme, setTheme } from "@scores/state/reducer/ThemeReducer";
import { Theme } from "@scores/types/enum/Theme";
import { getTheme } from "@scores/theme/utils/theme";
import { RootStackParamList } from "../typing/typing";

type Props = NativeStackScreenProps<RootStackParamList, "Index">;

export const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const themeStyles = getTheme();

  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      paddingBottom: insets.bottom,
      paddingHorizontal: 15,
    },
    row: {
      display: "flex",
      flexDirection: "row",
    },
    text: {
      marginRight: 5,
    },
  });

  const dispatchTheme = (theme: Theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <View style={[styles.container, themeStyles.container]}>
      <View style={[styles.row]}>
        <Text style={[styles.text, themeStyles.text]}>Theme:</Text>

        {theme === Theme.LIGHT_MODE && (
          <TouchableOpacity onPress={() => dispatchTheme(Theme.DARK_MODE)}>
            <IonIcon style={[themeStyles.text]} name={"sunny"} />
          </TouchableOpacity>
        )}
        {theme === Theme.DARK_MODE && (
          <TouchableOpacity onPress={() => dispatchTheme(Theme.LIGHT_MODE)}>
            <IonIcon style={[themeStyles.text]} name={"moon"} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
