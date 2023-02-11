import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Caption } from "./Caption";
import "../../index.css";

export default {
  title: "UI Kit/Typography/Caption",
  component: Caption,
} as ComponentMeta<typeof Caption>;

const Template: ComponentStory<typeof Caption> = (args) => (
  <Caption {...args}>Caption</Caption>
);

export const CaptionTemplate = Template.bind({});

CaptionTemplate.args = {};
