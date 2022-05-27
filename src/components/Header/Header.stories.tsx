import Header from '@components/Header';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Component/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>Header</Header>
);
