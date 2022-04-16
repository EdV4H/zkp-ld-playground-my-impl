import { ComponentMeta, ComponentStory } from "@storybook/react";

import VcElementHeader from ".";

export default {
  title: "Molecules/VcElementHeader",
  component: VcElementHeader,
  argTypes: {
    elementType: {
      control: {
        type: "radio",
        options: ["issuer", "holder", "verifier", "verifiableDataRegistry"],
      },
    },
  },
} as ComponentMeta<typeof VcElementHeader>;

const Template: ComponentStory<typeof VcElementHeader> = (args) => (
  <VcElementHeader {...args} />
);

export const Issuer = Template.bind({});
Issuer.args = {
  elementType: "issuer",
};
export const Holder = Template.bind({});
Holder.args = {
  elementType: "holder",
};
export const Verifier = Template.bind({});
Verifier.args = {
  elementType: "verifier",
};
export const VerifiableDataRegistry = Template.bind({});
VerifiableDataRegistry.args = {
  elementType: "verifiableDataRegistry",
};
