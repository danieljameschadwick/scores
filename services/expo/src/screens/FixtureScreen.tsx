import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import format from "date-fns/format";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getTheme } from "@scores/theme/utils/theme";
import { getFixture } from "@scores/http/services/football";
import { GameInterface } from "@scores/types/interfaces/GameInterface";
import { RootStackParamList } from "../typing/typing";

type Props = NativeStackScreenProps<RootStackParamList, "Fixture">;

export const FixtureScreen: React.FC<Props> = ({ route }) => {
  const {
    params: { id },
  } = route;
  const [fixture, setFixture] = useState<GameInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const themeStyles = getTheme();

  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      paddingBottom: insets.bottom,
      paddingHorizontal: 15,
    },
    heading: {
      fontSize: 18,
      fontWeight: "600",
      textAlign: "center",
      marginBottom: 10,
    },
    date: {
      fontSize: 14,
      textAlign: "center",
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      setFixture(await getFixture(id));
      setLoading(false);
    };

    if (!id) {
      return;
    }

    fetchData();
  }, [id]);

  if (loading) {
    // @TODO: handle loading logic in app
    return <Text>Loading...</Text>;
  }

  if (!fixture) {
    throw new Error("Fixture not found");
  }

  const {
    fixture: { date },
    teams: { home, away },
  } = fixture;

  return (
    <View style={[styles.container, themeStyles.container]}>
      <Text style={[styles.heading, themeStyles.text]}>
        {away.name} @ {home.name}
      </Text>

      <Text style={[styles.date, themeStyles.text]}>
        {format(new Date(date), "dd/MM/yyyy")}
      </Text>
    </View>
  );
};
