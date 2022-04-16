import { ComponentMeta, ComponentStory } from "@storybook/react";

import VcElementHeader from ".";

export default {
  title: "Molecules/VcElementHeader",
  component: VcElementHeader,
} as ComponentMeta<typeof VcElementHeader>;

const Template: ComponentStory<typeof VcElementHeader> = (args) => (
  <VcElementHeader />
);

export const Issuer = Template.bind({});
