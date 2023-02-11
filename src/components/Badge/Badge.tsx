import { FC, PropsWithChildren } from "react";
import cn from "clsx";

import s from "./Badge.module.css";

type BadgeProps = {
  /** Badge size affects the badge look */
  size?: "s" | "m" | "l";
  badgeStyle?: "primary" | "secondary" | "info" | "accent";
};

/**
 * Badge component
 */
export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
  size = "s",
  badgeStyle = "",
  children,
}) => {
  return (
    <div
      className={cn(
        s.badge,
        s[`badge_${size}`],
        s[`badge_style_${badgeStyle}`]
      )}
    >
      {children}
    </div>
  );
};
