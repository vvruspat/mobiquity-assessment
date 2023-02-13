import { useEffect, useState } from "react";
import { fetchSeasonResults } from "../../api/Api";
import { Header } from "../../components/Header";
import { RacesList } from "../../components/RacesList";
import { WinnerCard } from "../../components/WinnerCard";
import { useSeasonsStore } from "../../stores/seasons";
import { useSeasonResultsStore } from "../../stores/seasonResults";
import { EFetchStatus } from "../../types/fetchStatus";
import { Error } from "../../components/Error";
import { Loading } from "../../components/UIKit/Loading";
import { Text } from "../../components/UIKit/Text";

import s from "./Home.module.css";

export const Home = () => {
  const selectedSeason = useSeasonsStore((state) => state.selectedSeason);
  const setSeasonResults = useSeasonResultsStore(
    (state) => state.setSeasonResults
  );
  const globalWinner = useSeasonResultsStore((state) => state.globalWinner);
  const racesWinners = useSeasonResultsStore((state) => state.racesWinners);
  const [fetchingState, setFetchStatus] = useState(EFetchStatus.success);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    (async () => {
      if (selectedSeason) {
        setFetchStatus(EFetchStatus.fetching);

        try {
          const seasonResultsResponse = await fetchSeasonResults(
            selectedSeason
          );

          setFetchStatus(EFetchStatus.success);

          setSeasonResults(seasonResultsResponse.MRData.RaceTable.Races);
          /** Unfortunately we can cast here only to any type */
        } catch (e: any) {
          setSeasonResults([]);

          setFetchStatus(EFetchStatus.error);
          setErrorText(e.message);
        }
      }
    })();
  }, [selectedSeason, setSeasonResults]);

  return (
    <div className={s.page}>
      <Header />
      <section className={s.content}>
        {fetchingState === EFetchStatus.fetching && <Loading />}
        {fetchingState === EFetchStatus.error && (
          <Error>
            <Text weight="regular" size="m">
              {errorText ? errorText : "Unknown error"}
            </Text>
          </Error>
        )}
        {fetchingState === EFetchStatus.success && (
          <>
            {globalWinner && selectedSeason && (
              <WinnerCard
                year={selectedSeason}
                driver={globalWinner.driver}
                points={globalWinner.points}
                team={globalWinner.team}
                nationality={globalWinner.nationality}
              />
            )}

            {racesWinners && globalWinner && (
              <RacesList winners={racesWinners} winner={globalWinner} />
            )}
          </>
        )}
      </section>
    </div>
  );
};
