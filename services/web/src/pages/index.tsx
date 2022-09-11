import React from "react";
import { StyleSheet, View, Text } from "react-native-web";
import NoSsrWrapper from "@src/components/util/noSsrWrapper";
import { Header } from "@src/components/layout/header/Header";

const Index: React.FC = () => {
  return (
    <NoSsrWrapper>
      <View style={styles.container}>
        <Header />
      </View>
    </NoSsrWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  lightContainer: {
    backgroundColor: "white",
  },
  darkContainer: {
    backgroundColor: "black",
  },
  contentContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
});

export default Index;
