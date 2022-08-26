import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Profile from "../../pages/auth/profile";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Library/Pages/Auth/Profile",
  component: Profile,
} as ComponentMeta<typeof Profile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Profile> = (args) => <Profile />;

// Name example for the component state it represents i.e. Small for argTypes: {size: small}
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
