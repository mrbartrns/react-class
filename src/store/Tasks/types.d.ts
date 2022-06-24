export interface Task {
  id: string;
  content: string;
  complete: boolean;
}

export type ActionType = 'ADD_TASK' | 'UPDATE_TASK' | 'REMOVE_TASK';

export interface Action {
  type: ActionType;
  payload: Task;
}
