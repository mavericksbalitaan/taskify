import { createContext, ReactElement, useReducer } from "react";
import TaskReducer, { initState, initStateType, Actions } from "../hooks/TaskReducer";

interface TaskContextType {
  state: initStateType;
  dispatch: React.Dispatch<Actions>;
}

export const TaskContext = createContext<TaskContextType>({ state: initState, dispatch: () => undefined });

interface ChildrenType {
  children: ReactElement | ReactElement[];
}

const TaskProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(TaskReducer, initState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
