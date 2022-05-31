import { ComponentMeta, ComponentStory } from '@storybook/react';
import Slider from '@components/Slider';

export default {
  title: 'Component/Slider',
  component: Slider,
  argTypes: {
    defaultValue: {
      defaultValue: 1,
      control: 'number',
    },
    min: { defaultValue: 0.1, control: 'number' },
    max: { defaultValue: 100, control: 'number' },
    step: { defaultValue: 0.1, control: 'number' },
    onChange: { action: 'onChange' },
  },
} as ComponentMeta<typeof Slider>;

export const Default: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args} />
);
