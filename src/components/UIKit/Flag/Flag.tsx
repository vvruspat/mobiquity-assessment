import { FC, useMemo } from "react";
import cn from "clsx";

import "flag-icons/css/flag-icons.min.css";
import s from "./Flag.module.css";
import { useCountry } from "./useCountry";

type FlagProps = {
  /** Flag */
  size?: "s" | "m" | "l";
  /** Country name from API */
  country?: string;
  /** Nationality name from API */
  nationality?: string;
};

/**
 * Flag component
 */
export const Flag: FC<FlagProps> = ({ size = "s", country, nationality }) => {
  const { getCountryByNationality, getCountryByName } = useCountry();

  const code = useMemo(() => {
    if (nationality) return getCountryByNationality(nationality)?.code;
    if (country) return getCountryByName(country)?.code;
  }, [country, getCountryByName, getCountryByNationality, nationality]);

  return (
    <div
      className={cn(s.flag, s[`flag_${size}`], "fi", `fi-${code}`)}
      data-testid="flag"
    ></div>
  );
};
