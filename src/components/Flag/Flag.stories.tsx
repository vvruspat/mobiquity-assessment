import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Flag } from "./Flag";
import "../../index.css";

export default {
  title: "UI Kit/Flag",
  component: Flag,
} as ComponentMeta<typeof Flag>;

const Template: ComponentStory<typeof Flag> = (args) => <Flag {...args} />;

export const FlagTemplate = Template.bind({});

FlagTemplate.args = {};
