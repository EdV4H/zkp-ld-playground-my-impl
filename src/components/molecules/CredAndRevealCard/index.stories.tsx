import { ComponentMeta, ComponentStory } from "@storybook/react";

import CredAndRevealCard from ".";

export default {
  title: "Molecules/CredAndRevealCard",
  component: CredAndRevealCard,
} as ComponentMeta<typeof CredAndRevealCard>;

const Template: ComponentStory<typeof CredAndRevealCard> = (args) => (
  <CredAndRevealCard {...args} />
);

export const Default = Template.bind({});
