import { ComponentMeta, ComponentStory } from "@storybook/react";

import ZkpLdPgAppBar from ".";

export default {
  title: "Organisms/ZkpLdPgAppBar",
  component: ZkpLdPgAppBar,
} as ComponentMeta<typeof ZkpLdPgAppBar>;

const Template: ComponentStory<typeof ZkpLdPgAppBar> = (args) => (
  <ZkpLdPgAppBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  theme: "light",
};
