import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Badge } from "./Badge";
import "../../../index.css";

export default {
  title: "UI Kit/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>Badge content</Badge>
);

export const BadgeTemplate = Template.bind({});

BadgeTemplate.args = {
  align: "center",
  size: "s",
  badgeStyle: "secondary",
};
