import { ComponentMeta, ComponentStory } from '@storybook/react';
import TaskForm from '@components/TaskForm';

export default {
  title: 'Component/TaskForm',
  component: TaskForm,
} as ComponentMeta<typeof TaskForm>;

export const Default: ComponentStory<typeof TaskForm> = (args) => (
  <TaskForm {...args} />
);
