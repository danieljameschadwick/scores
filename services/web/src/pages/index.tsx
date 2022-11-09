import React from "react";
import { View } from "react-native-web";
import StyleSheet from "react-native-media-query";
import NoSsrWrapper from "@src/components/util/noSsrWrapper";
import { Header } from "@src/components/layout/header/Header";
import { FootballPanel } from "@scores/ui/components/layout/panel/FootballPanel";
import { NFLPanel } from "@scores/ui/components/layout/panel/NFLPanel";
import { CricketPanel } from "@scores/ui/components/layout/panel/CricketPanel";
import { FluidPageContent } from "@src/components/layout/FluidPageContent";
import { LeagueTablePanel } from "@scores/ui/components/layout/panel/leagueTable/LeagueTablePanel";

const Index: React.FC = () => {
  return (
    <NoSsrWrapper>
      <View style={styles.container}>
        <Header />

        <FluidPageContent style={containerStyles}>
          <View
            style={[styles.pageContent]}
            dataSet={{ media: ids.pageContent }}
          >
            <View
              style={[styles.mainContent]}
              dataSet={{ media: ids.mainContent }}
            >
              <FootballPanel />
              <NFLPanel />
              <CricketPanel />
            </View>

            <View style={[styles.sidebar]} dataSet={{ media: ids.sidebar }}>
              <LeagueTablePanel league={1} />
            </View>
          </View>
        </FluidPageContent>
      </View>
    </NoSsrWrapper>
  );
};

const { ids, styles } = StyleSheet.create({
  container: {
    minHeight: "100%",
  },
  pageContent: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    marginTop: 15,
    marginHorizontal: "auto",
    "@media (max-width: 990px)": {
      width: "100%",
      paddingHorizontal: 15,
    },
  },
  mainContent: {
    width: 660,
    paddingHorizontal: 10,
    "@media (max-width: 990px)": {
      width: "100%",
    },
  },
  sidebar: {
    width: 330,
    paddingHorizontal: 10,
    "@media (max-width: 990px)": {
      display: "none",
    },
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
});

const { styles: containerStyles } = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 107.5,
    paddingBottom: 50,
  },
});

export default Index;
