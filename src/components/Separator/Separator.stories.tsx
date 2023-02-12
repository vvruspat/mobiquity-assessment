import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Separator } from "./Separator";
import "../../index.css";

export default {
  title: "UI Kit/Separator",
  component: Separator,
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = () => <Separator />;

export const InfoBadgeTemplate = Template.bind({});
