import { FC, PropsWithChildren } from "react";
import { Text } from "../Text";

import s from "./Caption.module.css";

type CaptionProps = {};

/**
 * Subtitle component
 */
export const Caption: FC<PropsWithChildren<CaptionProps>> = ({ children }) => {
  return (
    <h6 className={s.caption}>
      <Text size="s" weight="regular">
        {children}
      </Text>
    </h6>
  );
};
