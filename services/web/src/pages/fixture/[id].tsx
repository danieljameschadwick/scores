import React from "react";
import { View, Text } from "react-native-web";
import StyleSheet from "react-native-media-query";
import { Header } from "@src/components/layout/header/Header";
import { FluidPageContent } from "@src/components/layout/FluidPageContent";
import { useRouter } from "next/router";
import { getTheme } from "@scores/theme/utils/theme";

const Fixture: React.FC = () => {
  const router = useRouter();
  const id = router.query?.id;

  const themeStyles = getTheme();

  return (
    <View style={styles.container}>
      <Header />

      <FluidPageContent styles={containerStyles}>
        <View
          style={[styles.pageContainer]}
          dataSet={{ media: ids.pageContainer }}
        >
          <Text style={[themeStyles.text]}>{id}</Text>
        </View>
      </FluidPageContent>
    </View>
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
});

const { styles: containerStyles } = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 107.5,
    paddingBottom: 50,
  },
});

export default Fixture;
