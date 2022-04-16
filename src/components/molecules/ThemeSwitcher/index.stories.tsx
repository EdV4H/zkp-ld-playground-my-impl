import { ComponentMeta, ComponentStory } from "@storybook/react";

import ThemeSwitcher from ".";

export default {
  title: "Molecules/ThemeSwitcher",
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
);

export const Light = Template.bind({});
