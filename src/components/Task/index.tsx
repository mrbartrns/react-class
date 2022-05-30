import React from 'react';
import styled from '@emotion/styled';
import Toggle from '@components/Toggle';

interface TaskProps {
  content: string;
  completed?: boolean;
}

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 40px;
  align-items: center;
  padding: 0 8px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  box-sizing: border-box;
`;

const Content = styled.span`
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
`;

const RemoveButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: red;
  cursor: pointer;
`;

const Task = ({
  content,
  completed = false,
  ...props
}: TaskProps): JSX.Element => (
  <ListItem {...props}>
    <Toggle on={completed} />
    <Content>{content}</Content>
    <RemoveButton>Remove</RemoveButton>
  </ListItem>
);

export default Task;
