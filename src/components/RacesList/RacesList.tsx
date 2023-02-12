import { RaceWinner } from "../../types/winner";
import { RaceCard } from "../RaceCard";
import { AnimatedList } from "react-animated-list";

import s from "./RacesList.module.css";

type RacesListProps = {
  winners: RaceWinner[];
  winner: RaceWinner;
};

/** List of races winners */
export const RacesList = ({ winners, winner }: RacesListProps) => {
  return (
    <div className={s.list}>
      <AnimatedList animation="grow" initialAnimationDuration={5000}>
        {winners.map((currentWinner) => (
          <RaceCard
            {...currentWinner}
            key={currentWinner.round}
            isAccent={currentWinner.driver === winner.driver}
          />
        ))}
      </AnimatedList>
    </div>
  );
};
