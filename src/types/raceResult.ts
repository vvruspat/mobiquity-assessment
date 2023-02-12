import { Constructor } from "./constructor";
import { Driver } from "./driver";
import { FastestLap } from "./FastestLap";
import { Time } from "./time";

export type RaceResult = {
  number: string;
  position: string;
  positionText: number;
  points: number;
  Driver: Driver;
  Constructor: Constructor;
  grid: number;
  laps: number;
  status: string;
  Time?: Time;
  FastestLap: FastestLap;
};
