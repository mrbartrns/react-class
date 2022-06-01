import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tab from '@components/Tab';
import TabItem from '@components/Tab/TabItem';

export default {
  title: 'Component/Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

export const Default: ComponentStory<typeof Tab> = (args) => (
  <Tab {...args}>
    <TabItem title="Item 1" index="item1">
      Item1
    </TabItem>
    <TabItem title="Item 2" index="item2">
      Item2
    </TabItem>
    <TabItem title="Item 3" index="item3">
      Item3
    </TabItem>
  </Tab>
);
