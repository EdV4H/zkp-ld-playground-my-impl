import { ComponentMeta, ComponentStory } from "@storybook/react";

import VcElements from ".";

export default {
  title: "Organisms/VcElements",
  component: VcElements,
} as ComponentMeta<typeof VcElements>;

const Template: ComponentStory<typeof VcElements> = (args) => (
  <VcElements {...args} />
);

export const Default = Template.bind({});
