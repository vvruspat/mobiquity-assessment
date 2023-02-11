import { Badge } from "../Badge";
import { Caption } from "../Caption";
import { Text } from "../Text";

type PointsBadgeProps = {
  points: number;
};

export const PointsBadge = ({ points }: PointsBadgeProps) => {
  return (
    <Badge badgeStyle="info" size="l">
      <Caption>Points</Caption>
      <Text size="xxl">{points}</Text>
    </Badge>
  );
};
