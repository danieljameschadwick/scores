import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getTheme } from "@scores/theme/utils/theme";
import { RootStackParamList } from "../typing/typing";

type Props = NativeStackScreenProps<RootStackParamList, "Fixture">;

export const FixtureScreen: React.FC<Props> = ({ route }) => {
  const {
    params: { id },
  } = route;

  const themeStyles = getTheme();

  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      paddingBottom: insets.bottom,
      paddingHorizontal: 15,
    },
  });

  return (
    <View style={[styles.container, themeStyles.container]}>
      <Text style={[themeStyles.text]}>{id}</Text>
    </View>
  );
};
