import React from "react";
import { StyleSheet, View, Text } from "react-native-web";
import format from "date-fns/format";
import NoSsrWrapper from "@src/components/util/noSsrWrapper";
import { Header } from "@src/components/layout/header/Header";
import { FluidPageContent } from "@src/components/layout/FluidPageContent";

const Index: React.FC = () => {
  const date = new Date();

  return (
    <NoSsrWrapper>
      <View style={styles.container}>
        <Header />

        <FluidPageContent styles={containerStyles}>
            <Text style={styles.heading}>
              {format(date, "do MMMM, yyyy")}
            </Text>
        </FluidPageContent>
      </View>
    </NoSsrWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  heading: {
    textAlign: "center",
    fontSize: "1.25em",
    fontWeight: "600",
  },
});

const containerStyles = StyleSheet.create({
  container: {
    marginTop: 135,
  },
});

export default Index;
