import { Circuit } from "./circuit";
import { RaceResult } from "./raceResult";

export type Race = {
  season: number;
  round: number;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  Results: RaceResult[];
};
