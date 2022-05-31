import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '@components/Input';

export default {
  title: 'Component/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};
