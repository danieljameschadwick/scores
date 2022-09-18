import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../typing/typing";
import { ScoresCarousel } from "@scores/ui/components/carousel/ScoresCarousel";
import { normaliseScores } from "@scores/http/utils/normaliseScores";
import { GAME_TYPE } from "@scores/types/enum/GameType";
import { getFixtures } from "@scores/http/services/football";

type Props = NativeStackScreenProps<RootStackParamList, "Index">;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [footballData, setFootballData] = useState<{}>(null);

  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      paddingBottom: insets.bottom,
    },
    heading: {
      textAlign: "center",
      fontSize: 18,
      marginBottom: 15,
      fontWeight: "bold",
    },
    carouselContainer: {
      flexGrow: 0,
      height: 56.5,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      setFootballData(normaliseScores(await getFixtures(), GAME_TYPE.FOOTBALL));
    };

    fetchData();
  }, []);

  return (
    <View style={[styles.container]}>
      <View style={[styles.carouselContainer]}>
        { footballData && <ScoresCarousel data={footballData} />}
      </View>
    </View>
  );
};
