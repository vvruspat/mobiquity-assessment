import { FC, PropsWithChildren, useCallback, useState } from "react";
import cn from "clsx";
import { Card } from "../Card";
import { Text } from "../Text";
import { Flag } from "../Flag";
import { Badge } from "../Badge";
import { TeamBadge } from "../TeamBadge";
import { Separator } from "../Separator";
import { Caption } from "../Caption";
import { InfoBadge } from "../InfoBadge";
import { Button } from "../Button";
import { Title } from "../Title";

import s from "./RaceCard.module.css";
import { ReactComponent as ArrowIcon } from "./assets/arrow.svg";
import { RaceWinner } from "../../types/winner";

type RaceCardProps = {
  isAccent: boolean;
} & RaceWinner;

/**
 * RaceCard component
 */
export const RaceCard: FC<PropsWithChildren<RaceCardProps>> = ({
  isAccent,

  round,
  date,
  raceTitle,
  circuit,
  driver,
  nationality,
  team,

  time,
  speed,
  points,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onToggleCollapse = useCallback(() => {
    setIsCollapsed((prevState) => !prevState);
  }, []);

  return (
    <Card isAccent={isAccent}>
      <header className={s.header}>
        <div className={s.header_info}>
          <div className={s.round}>
            <Badge
              size="s"
              badgeStyle={isAccent ? "accent" : "secondary"}
              className={s.round_badge}
            >
              <Text size="s">Round {round}</Text>
              <span className={s.v_separator}>|</span>
              <Text size="s">
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "long",
                }).format(new Date(date))}
              </Text>
            </Badge>
          </div>
          <Title>{raceTitle}</Title>
          <Caption
            className={cn({ [s.hidden]: isCollapsed, [s.shown]: !isCollapsed })}
          >
            {circuit}
          </Caption>
        </div>
        <div className={s.headerControls}>
          <Button mode="icon" isToggleable onClick={onToggleCollapse}>
            <ArrowIcon />
          </Button>
        </div>
      </header>

      <Separator
        className={cn({ [s.hidden]: isCollapsed, [s.shown]: !isCollapsed })}
      />

      <section
        className={cn(s.content, { [s.content_collapsed]: isCollapsed })}
      >
        <div className={s.flag}>
          <Flag nationality={nationality} size={isCollapsed ? "s" : "m"} />
        </div>

        <div
          className={cn(s.info, {
            [s.info_collapsed]: isCollapsed,
          })}
        >
          <div
            className={cn(s.winner, {
              [s.hidden]: isCollapsed,
              [s.shown]: !isCollapsed,
            })}
          >
            <Caption>Winner</Caption>
          </div>

          <div className={s.driver}>
            <Text size="l" weight="semibold">
              {driver}
            </Text>
          </div>
        </div>

        <div className={s.stat}>
          <TeamBadge team={team} />
        </div>
      </section>

      <footer
        className={cn(s.footer, {
          [s.hidden]: isCollapsed,
          [s.shown]: !isCollapsed,
        })}
      >
        <InfoBadge title="Time" content={time} />
        <InfoBadge title="Km/h" content={speed} />
        <InfoBadge title="Points" content={points.toString()} />
      </footer>
    </Card>
  );
};
