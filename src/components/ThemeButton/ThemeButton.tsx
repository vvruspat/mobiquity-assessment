import { useCallback, useEffect, useState } from "react";
import { Button } from "../Button";
import { ReactComponent as LightIcon } from "./assets/light.svg";
import { ReactComponent as DarkIcon } from "./assets/dark.svg";
import s from "./ThemeButton.module.css";

// If theme not setted to localstorage we are checking system preferences
const defaultTheme =
  (localStorage?.getItem("theme") as "dark" | "light" | undefined) ??
  /** Optional chaining for tests suites */
  (window?.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

export const ThemeButton = () => {
  const [mode, setMode] = useState<"dark" | "light">(defaultTheme);

  const onThemeButtonClick = useCallback(() => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", mode);
    localStorage?.setItem("theme", mode);
  }, [mode]);

  return (
    <Button onClick={onThemeButtonClick} mode="icon" className={s.theme_button}>
      {mode === "dark" ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
