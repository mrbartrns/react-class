import { ComponentStory, ComponentMeta } from '@storybook/react';
import TaskList from '@components/TaskList';

export default {
  title: 'Component/TaskList',
  component: TaskList,
} as ComponentMeta<typeof TaskList>;

export const Default: ComponentStory<typeof TaskList> = (args) => (
  <TaskList {...args} />
);
