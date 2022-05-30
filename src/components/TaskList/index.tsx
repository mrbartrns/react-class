import React from 'react';
import styled from '@emotion/styled';
import Task from '@components/Task';

// interface TaskListProps {}

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;

  > li {
    :not(:first-child) {
      margin-top: 8px;
    }
  }
`;

const TaskList: React.FC = ({ ...props }) => (
  <UnorderedList {...props}>
    <Task content="test" />
    <Task content="test" />
    <Task content="test" />
  </UnorderedList>
);

export default TaskList;
