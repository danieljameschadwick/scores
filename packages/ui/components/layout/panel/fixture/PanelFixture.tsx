import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import StyleSheet from "react-native-media-query";
import { GAME_RESULT } from "@scores/types/enum/GameResult";
import { FixtureRow } from "@scores/ui/components/layout/panel/fixture/FixtureRow";
import { getTheme } from "@scores/theme/utils/theme";
import { System } from "@scores/types/enum/System";
import { useRouter } from "@scores/ui/util/router";

interface ScoreInterface {
  name: string;
  abbreviation: string;
  logo?: string | null;
  score: number;
  result: GAME_RESULT;
}

interface Props {
  id: string;
  home: ScoreInterface;
  away: ScoreInterface;
}

export const PanelFixture: React.FC<Props> = ({ id, home, away }) => {
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
    <TouchableOpacity
      style={[styles.container]}
      dataSet={{ media: ids.container }}
      onPress={viewPage}
    >
      <View style={[styles.fixtureContainer]}>
        <FixtureRow {...home} />
        <FixtureRow {...away} />
      </View>

      <View style={[styles.statusContainer]}>
        <Text style={[themeStyles.text]}>FT</Text>
      </View>
    </TouchableOpacity>
  );
};

const { styles, ids } = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    paddingVertical: 12,
    "@media (max-width: 667px)": {
      width: "100%",
    },
  },
  fixtureContainer: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    paddingRight: "5%",
  },
  statusContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "30%",
  },
});
