import { createContext, useState, useContext, useMemo } from 'react';
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
  const [tasks, setTasks] = useState<Array<ITask>>([]);
  const addTask = (content: string) => {
    setTasks((prev) => [...prev, { id: v4(), content, completed: false }]);
  };
  const updateTask = (id: string, completed: boolean) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed } : { ...item },
      ),
    );
  };

  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  const ret = useMemo(
    () => ({ tasks, addTask, updateTask, removeTask }),
    [tasks],
  );
  return <TaskContext.Provider value={ret}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
