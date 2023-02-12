import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import { Text } from "../Text";

import cn from "clsx";
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
    <h2 className={cn(s.title, className)} {...htmlProps}>
      <Text size="xl" weight="bold">
        {children}
      </Text>
    </h2>
  );
};
