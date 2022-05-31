import { ComponentMeta, ComponentStory } from '@storybook/react';
import Divider from '@components/Divider';

export default {
  title: 'Component/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Horizontal: ComponentStory<typeof Divider> = () => {
  return (
    <>
      <div>위</div>
      <Divider type="horizontal" />
      <div>아래</div>
    </>
  );
};

export const Vertical: ComponentStory<typeof Divider> = () => {
  return (
    <>
      <span>왼쪽</span>
      <Divider type="vertical" />
      <span>오른쪽</span>
    </>
  );
};
