import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Title } from "./Title";
import "../../../index.css";

export default {
  title: "UI Kit/Typography/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args}>Title</Title>
);

export const TitleTemplate = Template.bind({});

TitleTemplate.args = {};
