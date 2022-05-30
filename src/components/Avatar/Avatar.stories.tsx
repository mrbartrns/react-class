import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '@components/Avatar';
import AvatarGroup from '@components/Avatar/AvatarGroup';

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

export const Group: ComponentStory<typeof AvatarGroup> = (args) => {
  return (
    <AvatarGroup {...args}>
      <Avatar src="https://picsum.photos/200?1" alt="img" />
      <Avatar src="https://picsum.photos/200?3" alt="img" />
      <Avatar src="https://picsum.photos/200?3" alt="img" />
      <Avatar src="https://picsum.photos/200?4" alt="img" />
    </AvatarGroup>
  );
};
