import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScoresCarousel } from "@scores/ui/components/carousel/ScoresCarousel";
import { normaliseScores } from "@scores/http/utils/normaliseScores";
import { GAME_TYPE } from "@scores/types/enum/GameType";
import { getFixtures } from "@scores/http/services/football";
import { getTheme } from "@scores/theme/utils/theme";
import { FootballPanel } from "@scores/ui/components/layout/panel/FootballPanel";
import { CricketPanel } from "@scores/ui/components/layout/panel/CricketPanel";

export const HomeScreen: React.FC = () => {
  const [footballData, setFootballData] = useState<{}>(null);
  const themeStyles = getTheme();

  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
    },
    heading: {
      textAlign: "center",
      fontSize: 18,
      marginBottom: 15,
      fontWeight: "bold",
    },
    carouselContainer: {
      flexGrow: 0,
    },
    contentContainer: {
      paddingBottom: insets.bottom,
    },
    panelContainer: {
      display: "flex",
      flexDirection: "column",
      marginTop: 15,
      paddingHorizontal: 15,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      setFootballData(normaliseScores(await getFixtures(), GAME_TYPE.FOOTBALL));
    };

    fetchData();
  }, []);

  return (
    <View style={[styles.container, themeStyles.container]}>
      <View style={[styles.carouselContainer]}>
        { footballData && <ScoresCarousel data={footballData} />}
      </View>

      <ScrollView style={[styles.contentContainer]}>
        <View style={[styles.panelContainer]}>
          <FootballPanel />
          <CricketPanel />
        </View>
      </ScrollView>
    </View>
  );
};
