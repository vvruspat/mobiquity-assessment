import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./Card";
import "../../index.css";

export default {
  title: "UI Kit/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>Card content</Card>
);

export const CardTemplate = Template.bind({});

CardTemplate.args = {
  isAccent: false,
  header: "Winner 2022",
};
