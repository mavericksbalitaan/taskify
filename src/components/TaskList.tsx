import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext'

const TaskList = () => {
  const context = useContext(TaskContext);
  const { state } = context;
  console.log(state.tasks.length)

  return (
    <div>{state.tasks.map(el => {
      return (<li key={el.id}>{el.text}</li>)
    })}</div>
  )
}

export default TaskList
