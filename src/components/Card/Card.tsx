import { FC, PropsWithChildren, ReactNode } from "react";
import cn from "clsx";

import s from "./Card.module.css";

type CardProps = {
  /** Make card highlighted */
  isAccent: boolean;
  /** Card header */
  header?: ReactNode;
};

/**
 * Card component
 */
export const Card: FC<PropsWithChildren<CardProps>> = ({
  isAccent = false,
  children,
  header,
}) => {
  return (
    <section
      className={cn(s.card, {
        [s.card_accent]: isAccent,
      })}
    >
      {header && <header className={s.header}>{header}</header>}
      <div className={s.content}>{children}</div>
    </section>
  );
};
