import { FC, PropsWithChildren } from "react";

import s from "./WinnerCard.module.css";
import { Winner } from "../../types/winner";
import { Card } from "../UIKit/Card";
import { Text } from "../UIKit/Text";
import { Flag } from "../UIKit/Flag";
import { PointsBadge } from "../PointsBadge";
import { TeamBadge } from "../TeamBadge";

type WinnerCardProps = Winner;

/**
 * WinnerCard component
 */
export const WinnerCard: FC<PropsWithChildren<WinnerCardProps>> = ({
  year,
  driver,
  points,
  team,
  nationality,
}) => {
  return (
    <Card isAccent={true} header={<Text size="m">Winner {year}</Text>}>
      <div className={s.content}>
        <div className={s.flag}>
          <Flag nationality={nationality} size="l" />
        </div>
        <div className={s.info}>
          <div className={s.title}>
            <Text size="xxl" weight="semibold">
              {driver}
            </Text>
          </div>
          <div className={s.team}>
            <TeamBadge team={team} />
          </div>
        </div>
        <div className={s.stat}>
          <PointsBadge points={points} />
        </div>
      </div>
    </Card>
  );
};
