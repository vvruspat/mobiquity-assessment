import { ComponentStory, ComponentMeta } from "@storybook/react";

import { WinnerCard } from "./WinnerCard";
import "../../index.css";

export default {
  title: "Components/WinnerCard",
  component: WinnerCard,
} as ComponentMeta<typeof WinnerCard>;

const Template: ComponentStory<typeof WinnerCard> = (args) => (
  <WinnerCard {...args}>Card content</WinnerCard>
);

export const CardTemplate = Template.bind({});

CardTemplate.args = {
  year: "2022",
  driver: "Charles Leclerc",
  points: 256,
  team: "RED BULL",
  nationality: "Spanish",
};
