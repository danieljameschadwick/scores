import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import IonIcon from "react-native-vector-icons/Ionicons";
import { RootStackParamList } from "../typing/typing";
import { useAppDispatch, useAppSelector } from "@scores/state/hooks";
import { selectTheme, setTheme } from "@scores/state/reducer/ThemeReducer";
import { Theme } from "@scores/types/enum/Theme";
import { getTheme } from "@scores/theme/utils/theme";

type Props = NativeStackScreenProps<RootStackParamList, "Index">;

export const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const themeStyles = getTheme();

  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      paddingBottom: insets.bottom,
    },
    row: {
      display: "flex",
      flexDirection: "row",
    },
  });

  const dispatchTheme = (theme: Theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.row]}>
        <Text>Theme:</Text>

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
