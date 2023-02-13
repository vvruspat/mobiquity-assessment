import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import { Text } from "../Text";
import cn from "clsx";

import s from "./Caption.module.css";

type CaptionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

/**
 * Subtitle component
 */
export const Caption: FC<PropsWithChildren<CaptionProps>> = ({
  children,
  className,
  ...htmlProps
}) => {
  return (
    <h6
      className={cn(s.caption, className)}
      {...htmlProps}
      data-testid="caption"
    >
      <Text size="s" weight="regular">
        {children}
      </Text>
    </h6>
  );
};
