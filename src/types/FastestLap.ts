import { AverageSpeed } from "./avarageSpeed";
import { Time } from "./time";

export type FastestLap = {
  rank: number;
  lap: number;
  Time?: Time;
  AverageSpeed: AverageSpeed;
};
