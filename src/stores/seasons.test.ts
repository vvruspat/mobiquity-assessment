import { act, renderHook } from "@testing-library/react";
import { useSeasonsStore } from "./seasons";

const seasons = [
  {
    season: "2022",
    url: "",
  },
  {
    season: "2021",
    url: "",
  },
  {
    season: "2020",
    url: "",
  },
  {
    season: "2019",
    url: "",
  },
  {
    season: "2018",
    url: "",
  },
  {
    season: "2017",
    url: "",
  },
  {
    season: "2016",
    url: "",
  },
].reverse();

test("test seasons store", () => {
  const { result } = renderHook(() => useSeasonsStore((state) => state));

  expect(result.current.seasons).toEqual([]);
  expect(result.current.selectedSeason).toEqual(null);

  act(() => {
    result.current.setSeasons(seasons);
  });

  expect(result.current.seasons).toMatchObject(seasons);
  expect(result.current.selectedSeason).toEqual("2022");

  act(() => {
    result.current.setSelectedSeason("2016");
  });

  expect(result.current.selectedSeason).toEqual("2016");
});
