import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { getTheme } from "@scores/theme/utils/theme";
import { ScoreBoxRow } from "@scores/ui/components/carousel/scoreBox/ScoreBoxRow";
import { GAME_RESULT } from "@scores/types/enum/GameResult";
import { useRouter } from "@scores/ui/util/router";
import { System } from "@scores/types/enum/System";
import { ScoreBoxStatus } from "./scoreBox/ScoreBoxStatus";
import { useFixture } from "@scores/ui/state/FixtureContext";

interface ScoreInterface {
  abbreviation: string;
  score: number;
  result: GAME_RESULT;
  logo?: string | null;
}

interface Props {
  id: number;
  home: ScoreInterface;
  away: ScoreInterface;
}

export const CarouselScoreBox: React.FC<Props> = () => {
  const { id, home, away } = useFixture();
  const themeStyles = getTheme();
  const router = useRouter();

  const viewPage = () => {
    // @TODO: write own proxy router implementation
    if (Platform.OS === System.WEB) {
      router.push(`/fixture/${id}`);

      return;
    }

    router.navigate("Fixture", {
      id,
    });

    return;
  };

  return (
    <TouchableOpacity onPress={viewPage}>
      <View style={[styles.container, themeStyles.darkContainer]}>
        <ScoreBoxStatus />
        <ScoreBoxRow {...home} />
        <ScoreBoxRow {...away} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    display: "flex",
    flexDirection: "column",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    borderRightWidth: 1,
    backgroundColor: "#FFFFFF",
  },
});
