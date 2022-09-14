import React from "react";
import { View, Text } from "react-native-web";
import StyleSheet from "react-native-media-query";
import NoSsrWrapper from "@src/components/util/noSsrWrapper";
import { Header } from "@src/components/layout/header/Header";
import { FluidPageContent } from "@src/components/layout/FluidPageContent";
import { Panel } from "@src/components/layout/panel/Panel";
import IonIcon from "react-native-vector-icons/Ionicons";

const Index: React.FC = () => {
  return (
    <NoSsrWrapper>
      <View style={styles.container}>
        <Header />

        <FluidPageContent styles={containerStyles}>
          <View style={[styles.pageContainer]} dataSet={{ media: ids.pageContainer }}>
            <Panel title={"Football"} icon={<IonIcon name={"football"} size={24} />}>
              <Text>
                Test
              </Text>
            </Panel>

            <Panel title={"Panel"}>
              <Text>
                Test
              </Text>
            </Panel>
          </View>
        </FluidPageContent>
      </View>
    </NoSsrWrapper>
  );
};

const { ids, styles } = StyleSheet.create({
  container: {
    height: "100%",
  },
  pageContainer: {
    marginTop: 15,
    marginHorizontal: "auto",
    width: "100%",
    "@media (min-width: 800px)": {
      width: 800,
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
    marginTop: 107.5,
  },
});

export default Index;
