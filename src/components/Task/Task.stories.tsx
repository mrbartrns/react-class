import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Task from '@components/Task';

export default {
  title: 'Component/Task',
  component: Task,
} as ComponentMeta<typeof Task>;

export const Default: ComponentStory<typeof Task> = (args) => (
  <Task {...args} />
);
