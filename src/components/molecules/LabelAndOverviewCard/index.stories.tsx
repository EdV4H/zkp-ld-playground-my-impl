import { TextSnippet } from "@mui/icons-material";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import LabelAndOverviewCard from ".";

export default {
  title: "Molecules/LabelAndOverviewCard",
  component: LabelAndOverviewCard,
} as ComponentMeta<typeof LabelAndOverviewCard>;

const Template: ComponentStory<typeof LabelAndOverviewCard> = (args) => (
  <LabelAndOverviewCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "LabelAndOverviewCard",
  label: "SelectLabel",
  icon: <TextSnippet />,
};
