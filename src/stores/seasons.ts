import { create } from "zustand";
import { Season } from "../types/seasons";

type SeasonsState = {
  seasons: Season[];
  selectedSeason: string | null;
  setSelectedSeason: (season: string) => void;
  setSeasons: (seasons: Season[]) => void;
};

/** Store to collect available seasons and selected season */
export const useSeasonsStore = create<SeasonsState>((set) => ({
  seasons: [],
  selectedSeason: null,
  setSelectedSeason: (season: string) =>
    set(() => {
      return { selectedSeason: season };
    }),
  setSeasons: (seasons: Season[]) =>
    set((state) => ({
      seasons,
      selectedSeason:
        state.selectedSeason || seasons[seasons.length - 1].season,
    })),
}));
