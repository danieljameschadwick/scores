import React from "react";
import format from "date-fns/format";
import { CarouselScoreBox } from "@src/components/scores/carousel/CarouselScoreBox";
import { CarouselText } from "@src/components/scores/carousel/CarouselText";

interface Props {
  groupName: string;
  leagueName: string;
  scores: any; // @TODO: type mocks/API data
}

export const CarouselGroup: React.FC<Props> = ({
  groupName,
  leagueName,
  scores: scoresByDate,
}) => {
  return (
    <>
      <CarouselText text={groupName} />
      <CarouselText text={leagueName} />
      {Object.keys(scoresByDate).sort().map((key) => {
        const date = new Date(Number.parseInt(key));

        return (
          <>
            <CarouselText key={key} text={format(date, "d/M")} />
            {scoresByDate[key].map((score) => {
              const { id } = score;

              return <CarouselScoreBox key={id} {...score} />;
            })}
          </>
        );
      })}
    </>
  );
};
