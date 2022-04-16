import { ComponentMeta, ComponentStory } from "@storybook/react";

import { builtinContexts } from "../../../data";

import EditorWithSideList from ".";

export default {
  title: "Molecules/EditorWithSideList",
  component: EditorWithSideList,
} as ComponentMeta<typeof EditorWithSideList>;

const Template: ComponentStory<typeof EditorWithSideList> = (args) => (
  <EditorWithSideList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  documents: builtinContexts,
};
