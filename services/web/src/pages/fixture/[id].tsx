import React, { useEffect, useState } from "react";
import { View } from "react-native-web";
import StyleSheet from "react-native-media-query";
import { useRouter } from "next/router";
import { useTheme } from "@scores/theme/utils/theme";
import { getFixture } from "@scores/http/services/football";
import { GameInterface } from "@scores/types/interfaces/GameInterface";
import { Fixture } from "@scores/ui/components/fixture/Fixture";
import { Header } from "@src/components/layout/header/Header";
import { FluidPageContent } from "@src/components/layout/FluidPageContent";

const FixturePage: React.FC = () => {
  const router = useRouter();
  const { id: rawId } = router.query;
  const id = parseInt(rawId as string, 10);
  const [fixture, setFixture] = useState<GameInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const themeStyles = useTheme();

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

  return (
    <View style={styles.container}>
      <Header />

      <FluidPageContent style={containerStyles}>
        <Fixture fixture={fixture} />
      </FluidPageContent>
    </View>
  );
};

const { styles } = StyleSheet.create({
  container: {
    minHeight: "100%",
  },
});

const { styles: containerStyles } = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 110.5,
    paddingBottom: 50,
  },
});

export default FixturePage;
