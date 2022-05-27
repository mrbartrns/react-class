import { ComponentMeta, ComponentStory } from '@storybook/react';
import Image from '@components/Image';

export default {
  title: 'Component/Image',
  component: Image,
  argTypes: {
    src: {
      name: 'src',
      type: { name: 'string', required: true },
      defaultValue: 'https://picsum.photos/200',
      control: { type: 'text' },
    },
    placeholder: {
      type: { name: 'string' },
      defaultValue: 'https://via.placeholder.com/200',
      control: { type: 'text' },
    },
    lazy: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    threshold: {
      type: { name: 'number' },
      defaultValue: 0.5,
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof Image>;

export const Default: ComponentStory<typeof Image> = (args) => (
  <>
    <Image {...args} />
    <Image {...args} />
  </>
);
