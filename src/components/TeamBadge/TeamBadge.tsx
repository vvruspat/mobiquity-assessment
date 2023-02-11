import { Badge } from "../Badge";
import { Text } from "../Text";
import s from "./TeamBadge.module.css";

type TeamBadgeProps = {
  team: string;
};

export const TeamBadge = ({ team }: TeamBadgeProps) => {
  return (
    <Badge badgeStyle="primary" size="m">
      <div className={s.team}>
        <Text size="s" weight="regular">
          {team}
        </Text>
      </div>
    </Badge>
  );
};
