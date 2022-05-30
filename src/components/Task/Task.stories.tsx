import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Task from '@components/Task';

export default {
  title: 'Component/Task',
  component: Task,
} as ComponentMeta<typeof Task>;

export const Default: ComponentStory<typeof Task> = () => {
  const task = {
    content: '출근하기',
    completed: false,
  };
  return <Task content={task.content} completed={task.completed} />;
};
