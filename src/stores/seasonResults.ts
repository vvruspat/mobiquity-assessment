import { create } from "zustand";
import { Race } from "../types/race";
import { RaceWinner } from "../types/winner";
import { calculateWinner } from "../utils/calculateWinners";

type SeasonResultsState = {
  racesWinners: RaceWinner[] | null;
  globalWinner: RaceWinner | null;
  setSeasonResults: (results: Race[]) => void;
};

export const useSeasonResultsStore = create<SeasonResultsState>((set) => ({
  racesWinners: null,
  globalWinner: null,
  setSeasonResults: (results: Race[]) => set(() => calculateWinner(results)),
}));
