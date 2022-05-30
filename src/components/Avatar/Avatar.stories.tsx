import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '@components/Avatar';

export default {
  title: 'Component/Avatar',
  component: Avatar,
  argTypes: {
    src: { defaultValue: 'https://picsum.photos/200' },
    shape: { defaultValue: 'circle' },
    size: {
      defaultValue: 70,
      control: {
        type: 'range',
        min: 40,
        max: 200,
      },
    },
    mode: {
      defaultValue: 'cover',
      control: 'inline-radio',
      options: ['contain', 'cover', 'fill'],
    },
  },
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);
