import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InfoBadge } from "./InfoBadge";
import "../../index.css";

export default {
  title: "Components/InfoBadge",
  component: InfoBadge,
} as ComponentMeta<typeof InfoBadge>;

const Template: ComponentStory<typeof InfoBadge> = (args) => (
  <InfoBadge {...args} />
);

export const InfoBadgeTemplate = Template.bind({});

InfoBadgeTemplate.args = {
  title: "Time",
  content: "1:37'33.584",
};
