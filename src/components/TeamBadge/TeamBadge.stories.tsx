import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TeamBadge } from "./TeamBadge";
import "../../index.css";

export default {
  title: "Components/TeamBadge",
  component: TeamBadge,
} as ComponentMeta<typeof TeamBadge>;

const Template: ComponentStory<typeof TeamBadge> = (args) => (
  <TeamBadge {...args} />
);

export const TeamBadgeTemplate = Template.bind({});

TeamBadgeTemplate.args = {
  team: "Red bull",
};
