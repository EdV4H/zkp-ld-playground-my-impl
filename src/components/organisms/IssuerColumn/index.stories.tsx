import { ComponentMeta, ComponentStory } from "@storybook/react";

import IssuerColumn from ".";

export default {
  title: "Organisms/IssuerColumn",
  component: IssuerColumn,
} as ComponentMeta<typeof IssuerColumn>;

const Template: ComponentStory<typeof IssuerColumn> = (args) => (
  <IssuerColumn {...args} />
);

export const Default = Template.bind({});
