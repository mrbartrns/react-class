import React, { useCallback, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import * as Task from '@/store/Tasks';

const TodoPage: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const todos = useSelector((state: RootState) => state.taskReudcer);
  const dispatch = useDispatch();

  const onAdd = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!ref.current) return;
      dispatch(Task.addTask(ref.current.value));
      ref.current.value = '';
    },
    [dispatch],
  );

  const onRemove = useCallback(
    (id: string) => {
      dispatch(Task.removeTask(id));
    },
    [dispatch],
  );

  return (
    <form onSubmit={onAdd}>
      <input type="text" ref={ref} />
      <button type="submit">Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.content}{' '}
            <button type="button" onClick={() => onRemove(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default TodoPage;
