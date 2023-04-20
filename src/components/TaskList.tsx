import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext'

const TaskList = () => {
  const context = useContext(TaskContext);
  console.log(context.state.tasks.length)

  return (
    <div>{context.state.tasks.length}</div>
  )
}

export default TaskList
