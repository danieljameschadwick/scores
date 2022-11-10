import React from "react";
import { Platform, View } from "react-native";
import StyleSheet from "react-native-media-query";
import { useTheme } from "@scores/theme/utils/theme";
import { Dropdown } from "@scores/ui/components/common/dropdown/Dropdown";
import { System } from "@scores/types/enum/System";
import { GameType } from "@scores/types/enum/GameType";

interface Props {
  game: Game;
  setGame: (game: Game) => {};
}

export const CarouselGameDropdown: React.FC<Props> = ({ game, setGame }) => {
  const themeStyles = useTheme();

  // @TODO: Dropdown is currently not supported on the app
  if (Platform.OS !== System.WEB) {
    return null;
  }

  return (
    <View
      style={[styles.container, themeStyles.lightContainer]}
      dataSet={{ media: ids.container }}
    >
      <Dropdown
        value={game}
        setValue={setGame}
        values={[
          { label: "Football", value: GameType.FOOTBALL },
          { label: "NFL", value: GameType.NFL },
        ]}
      />
    </View>
  );
};

const { ids, styles } = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: 160,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    "@media (max-width: 667px)": {
      display: "none",
    },
  },
});
