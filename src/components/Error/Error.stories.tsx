import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Error } from "./Error";
import "../../index.css";

export default {
  title: "Components/Error",
  component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => (
  <Error {...args}>Unknown error</Error>
);

export const ErrorTemplate = Template.bind({});

ErrorTemplate.args = {};
