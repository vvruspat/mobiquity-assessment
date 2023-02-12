import { SeasonResultsResponse, SeasonsResponse } from "../types/seasons";

const API_SERVER = "http://ergast.com/api/f1";

// Make request with response type
const request = <T>(url: string): Promise<T> => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<T>;
  });
};

// GET /seasons.json
// We need data from 2005 year, that's why offset hardcoded
export const fetchSeasons = () => {
  return request<SeasonsResponse>(
    `${API_SERVER}/seasons.json?offset=55&limit=40`
  );
};

// GET /{season}/results.json
export const fetchSeasonResults = (season: string) => {
  return request<SeasonResultsResponse>(
    `${API_SERVER}/${season}/results.json?limit=1000`
  );
};
