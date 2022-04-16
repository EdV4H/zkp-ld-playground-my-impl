import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Person1, Person2 } from "../../../data/doc";

import ObjectSelectCard from ".";

export default {
  title: "Molecules/ObjectSelectCard",
  component: ObjectSelectCard,
} as ComponentMeta<typeof ObjectSelectCard>;

const Template: ComponentStory<typeof ObjectSelectCard> = (args) => (
  <ObjectSelectCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "ObjectSelectCard",
  label: "SelectLabel",
  menus: {
    Person1: Person1,
    Person2: Person2,
  },
};
