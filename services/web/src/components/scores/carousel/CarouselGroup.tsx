import React from "react";
import { CarouselScoreBox } from "@src/components/scores/carousel/CarouselScoreBox";
import { CarouselText } from "@src/components/scores/carousel/CarouselText";

export const CarouselGroup = () => {
  return (
    <>
      <CarouselText text={"Football"} />
      <CarouselScoreBox />
      <CarouselScoreBox />
      <CarouselScoreBox />
      <CarouselScoreBox />
      <CarouselScoreBox />
      <CarouselScoreBox />
    </>
  );
};
