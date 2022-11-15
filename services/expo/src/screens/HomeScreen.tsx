import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScoresCarousel } from "@scores/ui/components/carousel/ScoresCarousel";
import { useTheme } from "@scores/theme/utils/theme";
import { FootballPanel } from "@scores/ui/components/layout/panel/FootballPanel";
import { NFLPanel } from "@scores/ui/components/layout/panel/NFLPanel";
import { CricketPanel } from "@scores/ui/components/layout/panel/CricketPanel";

export const HomeScreen: React.FC = () => {
  const themeStyles = useTheme();

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

  return (
    <View style={[styles.container, themeStyles.container]}>
      <View style={[styles.carouselContainer]}>
        <ScoresCarousel />
      </View>

      <ScrollView style={[styles.contentContainer]}>
        <View style={[styles.panelContainer]}>
          <FootballPanel />
          <NFLPanel />
          <CricketPanel />
        </View>
      </ScrollView>
    </View>
  );
};
