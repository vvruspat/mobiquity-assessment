import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PointsBadge } from "./PointsBadge";
import "../../index.css";

export default {
  title: "Components/PointsBadge",
  component: PointsBadge,
} as ComponentMeta<typeof PointsBadge>;

const Template: ComponentStory<typeof PointsBadge> = (args) => (
  <PointsBadge {...args} />
);

export const PointsBadgeTemplate = Template.bind({});

PointsBadgeTemplate.args = {
  points: 456,
};
