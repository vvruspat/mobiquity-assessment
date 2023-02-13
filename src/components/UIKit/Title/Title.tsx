import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import cn from "clsx";

import { Text } from "../Text";

import s from "./Title.module.css";

type TitleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

/**
 * Text component
 */
export const Title: FC<PropsWithChildren<TitleProps>> = ({
  children,
  className,
  ...htmlProps
}) => {
  return (
    <h2 className={cn(s.title, className)} {...htmlProps} data-testid="title">
      <Text size="xl" weight="bold">
        {children}
      </Text>
    </h2>
  );
};
