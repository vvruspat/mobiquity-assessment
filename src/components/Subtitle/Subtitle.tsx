import { FC, PropsWithChildren } from "react";
import { Text } from "../Text";

import s from "./Subtitle.module.css";

type SubtitleProps = {};

/**
 * Subtitle component
 */
export const Subtitle: FC<PropsWithChildren<SubtitleProps>> = ({
  children,
}) => {
  return (
    <h4 className={s.subtitle}>
      <Text size="l" weight="semibold">
        {children}
      </Text>
    </h4>
  );
};
