import { renderHook } from "@testing-library/react";
import { useCountry } from "./useCountry";

test("renders hook useCountry", () => {
  const { result } = renderHook(() => useCountry());

  expect(result.current.getCountryByNationality("Dutch").code).toEqual("nl");
  expect(result.current.getCountryByName("Netherlands").code).toEqual("nl");
});
