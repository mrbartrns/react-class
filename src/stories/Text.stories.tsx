import { Text } from '../components/Text';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Component/text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>Text</Text>
);
