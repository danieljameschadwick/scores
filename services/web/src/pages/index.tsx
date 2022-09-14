import React from "react";
import { StyleSheet, View, Text } from "react-native-web";
import format from "date-fns/format";
import NoSsrWrapper from "@src/components/util/noSsrWrapper";
import { Header } from "@src/components/layout/header/Header";
import { FluidPageContent } from "@src/components/layout/FluidPageContent";
import { getTheme } from "@scores/theme/utils/theme";

const Index: React.FC = () => {
  const themeStyles = getTheme();
  const date = new Date();

  return (
    <NoSsrWrapper>
      <View style={styles.container}>
        <Header />

        <FluidPageContent styles={containerStyles}>
          <View style={[styles.pageContainer]}>
            <Text style={[styles.heading, themeStyles.text]}>
              {format(date, "do MMMM, yyyy")}
            </Text>
          </View>
        </FluidPageContent>
      </View>
    </NoSsrWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  pageContainer: {
    marginTop: 15,
  },
  heading: {
    textAlign: "center",
    fontSize: "1.25em",
    fontWeight: "600",
  },
});

const containerStyles = StyleSheet.create({
  container: {
    marginTop: 107.5,
  },
});

export default Index;
