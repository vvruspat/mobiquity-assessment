import { FC, PropsWithChildren } from "react";
import { Text } from "../Text";

import s from "./Title.module.css";

type TitleProps = {};

/**
 * Text component
 */
export const Title: FC<PropsWithChildren<TitleProps>> = ({ children }) => {
  return (
    <h2 className={s.title}>
      <Text size="xl" weight="bold">
        {children}
      </Text>
    </h2>
  );
};
