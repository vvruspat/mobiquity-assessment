import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Subtitle } from "./Subtitle";
import "../../index.css";

export default {
  title: "UI Kit/Typography/Subtitle",
  component: Subtitle,
} as ComponentMeta<typeof Subtitle>;

const Template: ComponentStory<typeof Subtitle> = (args) => (
  <Subtitle {...args}>Subtitle</Subtitle>
);

export const SubtitleTemplate = Template.bind({});

SubtitleTemplate.args = {};
