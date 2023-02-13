import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RaceCard } from "./RaceCard";
import "../../index.css";

export default {
  title: "Components/RaceCard",
  component: RaceCard,
} as ComponentMeta<typeof RaceCard>;

const Template: ComponentStory<typeof RaceCard> = (args) => (
  <RaceCard {...args} />
);

export const RaceCardTemplate = Template.bind({});

RaceCardTemplate.args = {
  round: "2",
  date: "1979-10-17",
  raceTitle: "Spanish Grand Prix",
  country: "Spain",
  circuit: "Circuit de Barcelona-Catalunya",
  driver: "Charles Leclerc",
  points: 256,
  time: "12:34:34.765",
  speed: "256.65",
  team: "RED BULL",
  nationality: "Spanish",
};
