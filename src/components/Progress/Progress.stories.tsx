import { ComponentMeta, ComponentStory } from '@storybook/react';
import Progress from '@components/Progress';
import { useState } from 'react';

export default {
  title: 'Component/Progress',
  component: Progress,
  argTypes: {
    value: {
      defaultValue: 1,
      control: 'number',
    },
  },
} as ComponentMeta<typeof Progress>;

export const Default: ComponentStory<typeof Progress> = () => {
  const [value, setValue] = useState(20);
  return (
    <div>
      <button type="button" onClick={() => setValue(100)}>
        changeValue
      </button>
      <Progress value={value} />
    </div>
  );
};
