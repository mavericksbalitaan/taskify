export interface Task {
  id: number;
  text: string;
  isDone: boolean;
}

export interface initStateType {
  tasks: Task[];
}

export const initState = {
  tasks: [],
};

enum ActionTypes {
  ADD,
  REMOVE,
  DONE,
}

export type Actions = { type: ActionTypes.ADD, payload: string } | { type: ActionTypes.REMOVE, payload: number } | { type: ActionTypes.DONE, payload: number }

const TaskReducer = (state: initStateType, action: Actions): initStateType => {
  switch (action.type) {
    case ActionTypes.ADD:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload, isDone: false }]
      };
    case ActionTypes.REMOVE:
      return {
        ...state,
        tasks: [...state.tasks.filter((task: Task) => task.id !== action.payload)],
      };
    case ActionTypes.DONE:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task: Task) => {
            if (task.id === action.payload) {
              task.isDone = true;
            }
            return task;
          }),
        ],
      };
    default:
      return state;
  }
};

export default TaskReducer;
