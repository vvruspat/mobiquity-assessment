import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "UI Kit/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "secondary",
};

export const Outline = Template.bind({});
Outline.args = {
  mode: "outline",
};

export const Stretched = Template.bind({});
Stretched.args = {
  stretched: true,
};
