import { FC, PropsWithChildren } from "react";
import cn from "clsx";

import s from "./Text.module.css";

type TextProps = {
  /** Text size */
  size?: "s" | "m" | "l" | "xl" | "xxl";
  /** Text weight */
  weight?: "regular" | "bold" | "semibold";
};

/**
 * Text component
 */
export const Text: FC<PropsWithChildren<TextProps>> = ({
  children,
  size = "m",
  weight = "regular",
}) => {
  return (
    <span className={cn(s.text, [s[`size_${size}`]], [s[weight]])}>
      {children}
    </span>
  );
};
