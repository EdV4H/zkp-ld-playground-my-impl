import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Person1, Person2 } from "../../../data/doc";

import EditorWithSelect from ".";

export default {
  title: "Molecules/EditorWithSelect",
  component: EditorWithSelect,
} as ComponentMeta<typeof EditorWithSelect>;

const Template: ComponentStory<typeof EditorWithSelect> = (args) => (
  <EditorWithSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "EditorWithSelect",
  label: "SelectLabel",
  menus: {
    Person1: Person1,
    Person2: Person2,
  },
  editorContent: JSON.stringify(Person1, null, 2),
};
