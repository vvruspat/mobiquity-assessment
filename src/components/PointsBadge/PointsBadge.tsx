import { Badge } from "../UIKit/Badge";
import { Caption } from "../UIKit/Caption";
import { Text } from "../UIKit/Text";

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
