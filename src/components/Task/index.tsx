import React from 'react';
import styled from '@emotion/styled';

interface TaskProps {
  content: string;
  completed: boolean;
}

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 40px;
  align-items: center;
  padding: 0 8px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0, 2);
  list-style: none;
  box-sizing: border-box;
`;

const Task = ({
  content,
  completed = false,
  ...props
}: TaskProps): JSX.Element => (
  <ListItem {...props}>
    <input type="checkbox" defaultChecked={completed} />
    <span>{content}</span>
  </ListItem>
);

export default Task;
