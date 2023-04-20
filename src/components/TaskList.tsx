import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext'
import TaskCard from './TaskCard';
import { Task } from '../hooks/TaskReducer';
import '../stylesheets/tasklist.scss';
import { Typography } from '@mui/material';

const TaskList = () => {
  const context = useContext(TaskContext);
  const { state } = context;

  return (
    <div className='tasklist__container'>
      <ul>
        <Typography variant="h5" color="primary" sx={{ textDecoration: 'underline' }}>
          Active Tasks
        </Typography>
        {state.tasks.filter((task: Task) => task.isDone === false).map(task => {
          return (
            <TaskCard key={task.id} task={task} />
          )
        })
        }
      </ul>
      <ul>
        <Typography variant="h5" color="secondary" sx={{ textDecoration: 'underline' }}>
          Completed Tasks
        </Typography>
        {state.tasks.filter((task: Task) => task.isDone === true).map(task => {
          return (
            <TaskCard key={task.id} task={task} />
          )
        })
        }
      </ul>
    </div>
  )
}

export default TaskList;
