import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTasks } from '@/contexts/TaskProvider';

const Form = styled.form`
  width: 400px;
`;

const Input = styled.input`
  width: 332px;
  height: 32px;
  padding: 4px 6px;
  border-radius: 8px;
  border: 2px solid black;
  outline: none;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  width: 60px;
  height: 32px;
  padding: 4px 6px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: black;
  box-sizing: border-box;
  cursor: pointer;
`;

const TaskForm: React.FC = () => {
  const [task, setTask] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <SubmitButton type="submit">Add</SubmitButton>
    </Form>
  );
};

export default TaskForm;
