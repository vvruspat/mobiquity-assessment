import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Menu } from "./Menu";
import "../../index.css";

export default {
  title: "Components/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>Menu content</Menu>
);

export const MenuTemplate = Template.bind({});

const options = [];

for (let i = 0; i < 20; i++) {
  const year = (2022 - Number(i)).toString();

  options.push({
    key: year,
    value: year,
  });
}

MenuTemplate.args = {
  options,
};
