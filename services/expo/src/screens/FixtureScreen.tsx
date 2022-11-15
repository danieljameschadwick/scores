import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "@scores/theme/utils/theme";
import { getFixture } from "@scores/http/services/football";
import { GameInterface } from "@scores/types/interfaces/GameInterface";
import { Fixture } from "@scores/ui/components/fixture/Fixture";
import { RootStackParamList } from "../typing/typing";
import { normaliseScore } from "@scores/http/utils/normaliseScores";

type Props = NativeStackScreenProps<RootStackParamList, "Fixture">;

export const FixtureScreen: React.FC<Props> = ({ route }) => {
  const {
    params: { id, gameType },
  } = route;
  const [fixture, setFixture] = useState<GameInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const themeStyles = useTheme();

  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      paddingBottom: insets.bottom,
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

  // @TODO: could we combine the 'controller' logic here to the web app too?
  useEffect(() => {
    const fetchData = async () => {
      setFixture(normaliseScore(await getFixture(id), gameType));
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

  return (
    <View style={[styles.container, themeStyles.container]}>
      <ScrollView>
        <Fixture fixture={fixture} gameType={gameType} />
      </ScrollView>
    </View>
  );
};
