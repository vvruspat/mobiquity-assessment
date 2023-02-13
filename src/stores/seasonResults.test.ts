import { act, renderHook } from "@testing-library/react";
import { useSeasonResultsStore } from "./seasonResults";

import results from "../utils/raceWinners.test-data.json";
import winnerResult from "../utils/winnerResult.test-data.json";
import racesWinnersResult from "../utils/racesWinnersResult.test-data.json";

test("test results store", () => {
  const { result } = renderHook(() => useSeasonResultsStore((state) => state));

  expect(result.current.racesWinners).toEqual(null);
  expect(result.current.globalWinner).toEqual(null);

  act(() => {
    result.current.setSeasonResults(results as any);
  });

  expect(result.current.racesWinners).toMatchObject(racesWinnersResult);
  expect(result.current.globalWinner).toMatchObject(winnerResult);
});
