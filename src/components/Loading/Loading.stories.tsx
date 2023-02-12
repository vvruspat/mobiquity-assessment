import { ComponentStory, ComponentMeta } from "@storybook/react";

import "../../index.css";
import { Loading } from "./Loading";

export default {
  title: "Components/Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const LoadingTemplate = Template.bind({});

LoadingTemplate.args = {};
