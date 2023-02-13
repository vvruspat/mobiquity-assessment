import { useCallback } from "react";
import countries from "flag-icons/country.json";
import nationalities from "./nationality-to-country.json";

export const useCountry = () => {
  const getCountryByName = useCallback((name: string) => {
    return countries.find((country) => country.name === name);
  }, []);

  const getCountryByNationality = useCallback(
    (name: string) => {
      const nationalityCountry = nationalities.find(
        (nationality) => nationality.Nationality === name
      );

      if (nationalityCountry) {
        return getCountryByName(nationalityCountry.Country);
      }
    },
    [getCountryByName]
  );

  return {
    getCountryByName,
    getCountryByNationality,
  };
};
