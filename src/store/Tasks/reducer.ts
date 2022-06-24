import { Action, Task } from './types';

// eslint-disable-next-line default-param-last
export const taskReudcer = (state: Task[] = [], action: Action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'UPDATE_TASK':
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task,
      );
    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
};
