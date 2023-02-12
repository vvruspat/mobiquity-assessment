import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { ReactComponent as ArrowIcon } from "../RaceCard/assets/arrow.svg";

export default {
  title: "UI Kit/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Outline = Template.bind({});
Outline.args = {
  mode: "outline",
};

const IconTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} style={{ color: "var(--regular-color)" }}>
    <ArrowIcon />
  </Button>
);

export const Icon = IconTemplate.bind({});
Icon.args = {
  mode: "icon",
  isToggleable: true,
};
