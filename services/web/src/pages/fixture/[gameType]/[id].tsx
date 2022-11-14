import React, { useEffect, useState } from "react";
import { View } from "react-native-web";
import StyleSheet from "react-native-media-query";
import { useRouter } from "next/router";
import { getFixture } from "@scores/http/services/football";
import { GameInterface } from "@scores/types/interfaces/GameInterface";
import { Fixture } from "@scores/ui/components/fixture/Fixture";
import { Header } from "@src/components/layout/header/Header";
import { FluidPageContent } from "@src/components/layout/FluidPageContent";
import { normaliseScore } from "@scores/http/utils/normaliseScores";

const formatEnum = (string: string) => {
  return string.toUpperCase();
};

const FixturePage: React.FC = () => {
  const router = useRouter();
  // @TODO: is there a better way to cast this?
  const { gameType: rawGameType, id: rawId } = router.query;
  const id = parseInt(rawId as string, 10);
  const gameType = (rawGameType as string)?.toUpperCase();

  const [fixture, setFixture] = useState<GameInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchData = async () => {
      // @ts-ignore -- @TODO: again, how do we type a string to enum?
      setFixture(normaliseScore(await getFixture(id), gameType));
      setLoading(false);
    };

    setLoading(true);
    setFixture(null);
    fetchData();
  }, [id, router.isReady]);

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
        <Fixture fixture={fixture} gameType={gameType} />
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
