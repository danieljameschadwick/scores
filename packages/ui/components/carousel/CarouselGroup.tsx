import React from "react";
import { StyleSheet, View } from "react-native";
import format from "date-fns/format";
import { CarouselScoreBox } from "@scores/ui/components/carousel/CarouselScoreBox";
import { CarouselText } from "@scores/ui/components/carousel/CarouselText";
import { CarouselPseudo } from "@scores/ui/components/carousel/CarouselPseudo";
import { FixtureContext } from "../../state/FixtureContext";

interface Props {
  groupName: string;
  leagueName: string;
  scores: any; // @TODO: type mocks/API data
}

export const CarouselGroup: React.FC<Props> = ({
  leagueName,
  scores: scoresByDate,
}) => {
  return (
    <>
      <CarouselText text={leagueName} />

      {Object.keys(scoresByDate)
        .sort()
        .map((key) => {
          const date = new Date(Number.parseInt(key));

          return (
            <View key={date.toString()} style={[styles.container]}>
              <CarouselText key={key} text={format(date, "d/M")} />

              {scoresByDate[key].map((fixture) => {
                const { id } = fixture;

                return (
                  <FixtureContext.Provider key={id} value={fixture}>
                    <CarouselScoreBox key={id} />
                  </FixtureContext.Provider>
                );
              })}
            </View>
          );
        })}

      {/* @TODO: do we need a pseudo element */}
      <CarouselPseudo />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});
