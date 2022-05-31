import React from 'react';
import styled from '@emotion/styled';
import Task from '@components/Task';
import { useTasks } from '@contexts/TaskProvider';

// interface TaskListProps {}

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;

  > li {
    :not(:first-of-type) {
      margin-top: 8px;
    }
  }
`;

const TaskList: React.FC = ({ ...props }) => {
  const { tasks } = useTasks();
  return (
    <UnorderedList {...props}>
      {tasks &&
        tasks.map(({ id, content, completed }) => (
          <Task
            key={id}
            id={id}
            data-id={id}
            content={content}
            completed={completed}
          />
        ))}
    </UnorderedList>
  );
};

export default TaskList;
