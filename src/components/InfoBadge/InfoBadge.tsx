import { Badge } from "../UIKit/Badge";
import { Caption } from "../UIKit/Caption";
import { Text } from "../UIKit/Text";

type InfoBadgeProps = {
  title: string;
  content: string;
};

export const InfoBadge = ({ title, content }: InfoBadgeProps) => {
  return (
    <Badge badgeStyle="info" size="l" align="left">
      <Caption>{title}</Caption>
      <Text size="m" weight="regular">
        {content}
      </Text>
    </Badge>
  );
};
