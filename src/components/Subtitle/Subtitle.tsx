import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import cn from "clsx";
import { Text } from "../Text";

import s from "./Subtitle.module.css";

type SubtitleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

/**
 * Subtitle component
 */
export const Subtitle: FC<PropsWithChildren<SubtitleProps>> = ({
  children,
  className,
  ...htmlProps
}) => {
  return (
    <h4 className={cn(s.subtitle, className)} {...htmlProps}>
      <Text size="l" weight="semibold">
        {children}
      </Text>
    </h4>
  );
};
