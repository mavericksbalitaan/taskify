import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext'
import TaskCard from './TaskCard';
import { Task } from '../hooks/TaskReducer';
import '../stylesheets/tasklist.scss';

const TaskList = () => {
  const context = useContext(TaskContext);
  const { state } = context;

  return (
    <ul>
      {state.tasks.map((task: Task) => {
        return (
          <TaskCard key={task.id} task={task} />
        )
      })}
    </ul>
  )
}

export default TaskList;
