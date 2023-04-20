import { nanoid } from 'nanoid';

export interface Task {
  id: string;
  text: string;
  isDone: boolean;
}

export interface initStateType {
  tasks: Task[];
}

export const initState = {
  tasks: [],
};

export enum ActionTypes {
  ADD,
  REMOVE,
  UNDONE,
  DONE,
  EDIT
}

export type Actions = {
  type: ActionTypes.ADD | ActionTypes.REMOVE | ActionTypes.UNDONE | ActionTypes.DONE;
  payload: string
} | { type: ActionTypes.EDIT; payload: { id: string, text: string } }

const TaskReducer = (state: initStateType, action: Actions): initStateType => {
  switch (action.type) {
    case ActionTypes.ADD:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: nanoid(), text: action.payload, isDone: false }]
      };
    case ActionTypes.REMOVE:
      return {
        ...state,
        tasks: [...state.tasks.filter((task: Task) => task.id !== action.payload)],
      };
    case ActionTypes.UNDONE:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task: Task) => {
            if (task.id === action.payload) {
              task.isDone = false;
            }
            return task;
          }),
        ],
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
    case ActionTypes.EDIT:
      return {
        ...state, tasks: [...state.tasks.map((task: Task) => {
          if (task.id === action.payload.id) {
            task.text = action.payload.text;
          }
          return task;
        })]
      };
    default:
      return state;
  }
};

export default TaskReducer;
