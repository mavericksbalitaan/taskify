import { Edit, Delete, Done } from '@mui/icons-material';
import '../stylesheets/taskcard.scss';
import { Typography, IconButton } from '@mui/material';

const TaskCard = ({ task }: any) => {
  const { id, text } = task;

  const editHandler = () => {
    alert('edit')
  }

  const deleteHandler = () => {
    alert('delete')
  }

  const doneHandler = () => {
    alert('done')
  }

  return (
    <li key={id} className="taskcard">
      <Typography variant="h5">
        {text}
      </Typography>
      <div>
        <IconButton color="success" onClick={editHandler}><Edit /></IconButton >
        <IconButton color="error" onClick={deleteHandler}><Delete /></IconButton>
        <IconButton color="primary" onClick={doneHandler}><Done /></IconButton>
      </div>
    </li >
  )
}

export default TaskCard;
