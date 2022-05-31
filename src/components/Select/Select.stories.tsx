import { ComponentMeta, ComponentStory } from '@storybook/react';
import Select from '@components/Select';

export default {
  title: 'Component/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = (args) => {
  return (
    <Select
      {...args}
      data={['Item 1', 'Item 2']}
      label="Test"
      placeholder="Placeholder"
    />
  );
};
