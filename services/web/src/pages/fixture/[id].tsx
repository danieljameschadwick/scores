import React, { useEffect, useState } from "react";
import { View, Text } from "react-native-web";
import StyleSheet from "react-native-media-query";
import { useRouter } from "next/router";
import format from "date-fns/format";
import { Header } from "@src/components/layout/header/Header";
import { FluidPageContent } from "@src/components/layout/FluidPageContent";
import { getTheme } from "@scores/theme/utils/theme";
import { getFixture } from "@scores/http/services/football";

const Fixture: React.FC = () => {
  const router = useRouter();
  const { id: rawId } = router.query;
  const id = parseInt(rawId as string, 10);
  const [fixture, setFixture] = useState<{}>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const themeStyles = getTheme();

  useEffect(() => {
    const fetchData = async () => {
      setFixture(await getFixture(id));
      setLoading(false);
    };

    if (!id) {
      return;
    }

    fetchData();
  }, [id]);

  if (loading) {
    return null;
  }

  if (!fixture) {
    throw new Error("Fixture not found");
  }

  const {
    fixture: { date },
    teams: { home, away },
  } = fixture;

  return (
    <View style={styles.container}>
      <Header />

      <FluidPageContent styles={containerStyles}>
        <View
          style={[styles.pageContainer]}
          dataSet={{ media: ids.pageContainer }}
        >
          <Text style={[styles.heading, themeStyles.text]}>
            {away.name} @ {home.name}
          </Text>

          <Text style={[styles.date, themeStyles.text]}>
            {format(new Date(date), "dd/MM/yyyy")}
          </Text>
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
  heading: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    textAlign: "center",
  }
});

const { styles: containerStyles } = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 107.5,
    paddingBottom: 50,
  },
});

export default Fixture;
