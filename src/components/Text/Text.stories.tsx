import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "./Text";
import "../../index.css";

export default {
  title: "UI Kit/Typography/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>Text</Text>
);

export const TextTemplate = Template.bind({});
TextTemplate.args = {};
