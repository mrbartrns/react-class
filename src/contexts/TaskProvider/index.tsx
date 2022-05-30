import { createContext, useCallback, useContext, useMemo } from 'react';
import useLocalStorage from '@hooks/useLocalStorage';
import { v4 } from 'uuid';
import { ITask } from '@/types/Task';

interface TaskProviderProps {
  children: React.ReactNode;
}

interface ITaskContext {
  tasks: ITask[];
  addTask: (content: string) => void;
  updateTask: (id: string, completed: boolean) => void;
  removeTask: (id: string) => void;
}

const TaskContext = createContext<ITaskContext>({} as unknown as ITaskContext);

export const useTasks = () => useContext(TaskContext);

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useLocalStorage<Array<ITask>>('tasks', []);

  const addTask = useCallback(
    (content: string) => {
      setTasks([...tasks, { id: v4(), content, completed: false }]);
    },
    [setTasks, tasks],
  );
  const updateTask = useCallback(
    (id: string, completed: boolean) => {
      setTasks(
        tasks.map((item) =>
          item.id === id ? { ...item, completed } : { ...item },
        ),
      );
    },
    [setTasks, tasks],
  );

  const removeTask = useCallback(
    (id: string) => {
      setTasks(tasks.filter((item) => item.id !== id));
    },
    [setTasks, tasks],
  );

  const ret = useMemo(
    () => ({ tasks, addTask, updateTask, removeTask }),
    [addTask, removeTask, tasks, updateTask],
  );
  return <TaskContext.Provider value={ret}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
