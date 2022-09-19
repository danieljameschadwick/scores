import React from "react";
import { View } from "react-native-web";
import StyleSheet from "react-native-media-query";
import NoSsrWrapper from "@src/components/util/noSsrWrapper";
import { Header } from "@src/components/layout/header/Header";
import { FluidPageContent } from "@src/components/layout/FluidPageContent";
import { FootballPanel } from "@scores/ui/components/layout/panel/FootballPanel";
import { CricketPanel } from "@scores/ui/components/layout/panel/CricketPanel";

const Index: React.FC = () => {
  return (
    <NoSsrWrapper>
      <View style={styles.container}>
        <Header />

        <FluidPageContent styles={containerStyles}>
          <View
            style={[styles.pageContainer]}
            dataSet={{ media: ids.pageContainer }}
          >
            <FootballPanel />
            <CricketPanel />
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
  pageContainer: {
    marginTop: 15,
    marginHorizontal: "auto",
    width: "100%",
    "@media (min-width: 667px)": {
      width: 660,
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
