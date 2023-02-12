import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import cn from "clsx";

import s from "./Badge.module.css";

type BadgeProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  /** Badge size affects the badge look */
  size?: "s" | "m" | "l";
  /** Text align */
  align?: "left" | "center" | "right";
  /** Badge style */
  badgeStyle?: "primary" | "secondary" | "info" | "accent";
};

/**
 * Badge component
 */
export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
  size = "s",
  badgeStyle = "",
  align = "center",
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        s.badge,
        s[`badge_${size}`],
        s[`badge_style_${badgeStyle}`],
        s[`badge_align_${align}`],
        className
      )}
    >
      {children}
    </div>
  );
};
