import { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "clsx";

import s from "./Separator.module.css";

type SeparatorProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHRElement>,
  HTMLHRElement
>;

export const Separator = ({ className, ...htmlProps }: SeparatorProps) => {
  return (
    <hr
      className={cn(s.separator, className)}
      {...htmlProps}
      data-testid="separator"
    />
  );
};
