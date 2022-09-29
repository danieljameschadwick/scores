import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import format from "date-fns/format";
import { CarouselScoreBox } from "@scores/ui/components/carousel/CarouselScoreBox";
import { CarouselText } from "@scores/ui/components/carousel/CarouselText";

interface Props {
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
      {Object.keys(scoresByDate).sort().map((key) => {
        const date = new Date(Number.parseInt(key));

        return (
          <View key={date.toString()} style={[styles.container]}>
            <CarouselText key={key} text={format(date, "d/M")} />
            {scoresByDate[key].map((score) => {
              const { id } = score;

              return <CarouselScoreBox key={id} {...score} />;
            })}
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});
