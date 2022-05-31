import { ComponentStory } from '@storybook/react';
import Skeleton from '@components/Skeleton';

export default {
  title: 'Component/Skeleton',
};

export const Default: ComponentStory<typeof Skeleton.Box> = (args) => {
  return <Skeleton.Box {...args} />;
};
Default.argTypes = {
  width: { defaultValue: 200, control: 'number' },
  height: { defaultValue: 100, control: 'number' },
};

export const Paragraph: ComponentStory<typeof Skeleton.Paragraph> = (args) => (
  <Skeleton.Paragraph {...args} />
);

export const Sample = () => {
  return (
    <>
      <div style={{ float: 'left', marginRight: 16 }}>
        <Skeleton.Circle size={60} />
      </div>
      <div style={{ float: 'left', width: '80%' }}>
        <Skeleton.Paragraph line={4} />
      </div>
      <div style={{ clear: 'both' }} />
    </>
  );
};
