import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";
import "../../index.css";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}></Header>
);

export const HeaderTemplate = Template.bind({});

HeaderTemplate.args = {};
