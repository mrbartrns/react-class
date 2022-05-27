import { ComponentMeta, ComponentStory } from '@storybook/react';
import Spacer from '@components/Spacer';

export default {
  title: 'Component/Spacer',
  component: Spacer,
  argType: {
    defaultValue: 8,
    control: { type: 'range', min: 8, max: 64 },
  },
} as ComponentMeta<typeof Spacer>;

const Box = ({
  block,
  style,
}: {
  block?: boolean;
  style?: { [key: string]: any };
}): JSX.Element => {
  return (
    <div
      style={{
        display: block ? 'block' : 'inline-block',
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        ...style,
      }}
    />
  );
};

export const Horizontal: ComponentStory<typeof Spacer> = (args) => (
  <Spacer {...args}>
    <Box />
    <Box />
    <Box />
  </Spacer>
);

Horizontal.args = {
  type: 'horizontal',
};

export const Vertical: ComponentStory<typeof Spacer> = (args) => (
  <Spacer {...args}>
    <Box block />
    <Box block />
    <Box block />
  </Spacer>
);
Vertical.args = {
  type: 'vertical',
};
