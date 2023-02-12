import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import cn from "clsx";

import { Menu, MenuItemOption } from "../Menu";
import { useSeasonsStore } from "../../stores/seasons";
import { fetchSeasons } from "../../api/Api";

import { ReactComponent as LogoIcon } from "./assets/logo.svg";

import s from "./Header.module.css";

type HeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

/**
 * Page header component
 */
export const Header: FC<PropsWithChildren<HeaderProps>> = ({
  className,
  ...htmlProps
}) => {
  const { seasons, setSeasons, setSelectedSeason } = useSeasonsStore(
    (state) => state
  );

  /** Load list of available seasons */
  useEffect(() => {
    (async () => {
      try {
        const seasonsResponse = await fetchSeasons();

        setSeasons(
          seasonsResponse.MRData.SeasonTable.Seasons
            /** Remove current year, because we dont have winner yet */
            .slice(0, -1)
        );
      } catch (e) {
        setSeasons([]);
      }
    })();
  }, [setSeasons]);

  /** Map seasons to menu items */
  const seasonsOptions: MenuItemOption[] = useMemo(
    () =>
      seasons
        .map((season) => ({ key: season.season, value: season.season }))
        .reverse(),
    [seasons]
  );

  const onSeasonSelect = useCallback(
    (selected: MenuItemOption) => {
      setSelectedSeason(selected.key);
    },
    [setSelectedSeason]
  );

  return (
    <header className={cn(s.header, className)} {...htmlProps}>
      <div className={s.header_content}>
        <LogoIcon />
      </div>
      <Menu options={seasonsOptions} onSelect={onSeasonSelect} />
    </header>
  );
};
