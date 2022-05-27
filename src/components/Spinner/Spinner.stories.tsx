import { ComponentMeta, ComponentStory } from '@storybook/react';
import Spinner from '@components/Spinner';
export default {
  title: 'Component/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);
