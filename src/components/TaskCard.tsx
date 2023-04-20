import { Edit, Delete, Done, Close, AddTask } from "@mui/icons-material";
import "../stylesheets/taskcard.scss";
import { Typography, IconButton, TextField } from "@mui/material";
import { TaskContext } from "../contexts/TaskContext";
import { useContext, useState } from "react";
import { ActionTypes } from "../hooks/TaskReducer";

const TaskCard = ({ task }: any) => {
  const { id, text, isDone } = task;
  const context = useContext(TaskContext);
  const { dispatch } = context;
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(text);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const editHandler = () => {
    setEdit(!edit);
  };

  const clickHandler = (id: any): void => {
    dispatch({
      type: ActionTypes.EDIT,
      payload: {
        id: id,
        text: value
      }
    })
    setEdit(!edit);
  }

  const deleteHandler = (id: any) => {
    dispatch({ type: ActionTypes.REMOVE, payload: id });
  };

  const undoneHandler = (id: any) => {
    dispatch({ type: ActionTypes.UNDONE, payload: id });
  };

  const doneHandler = (id: any) => {
    dispatch({ type: ActionTypes.DONE, payload: id });
  };

  return (
    <li key={id} className="taskcard">
      {/* when edit is active */}
      {edit && (
        <>
          <TextField variant="standard" value={value} onChange={changeHandler} required autoFocus sx={{ color: "#fff" }} />
        </>
      )}
      {/* when edit is inactive */}
      {!edit && !isDone && (
        <Typography variant="h5">{text}</Typography>
      )}
      {!edit && isDone && (
        <Typography variant="h5" sx={{ textDecoration: "line-through" }}>{text}</Typography>)}
      <div>
        {!edit ? (
          <IconButton color="success" onClick={editHandler} sx={{ backgroundColor: "#fff", border: "1px solid #333" }}>
            <Edit />
          </IconButton>
        ) : (
          <IconButton color="success" onClick={(e) => clickHandler(e.currentTarget.dataset.id)} data-id={id} sx={{ backgroundColor: "#fff", border: "1px solid #333" }}>
            <AddTask />
          </IconButton>
        )}
        {!edit && (
          <>
            <IconButton color="error" onClick={(e) => deleteHandler(e.currentTarget.dataset.id)} data-id={id} sx={{ backgroundColor: "#fff", border: "1px solid #333", m: "0 1rem" }}>
              <Delete />
            </IconButton>
            {!isDone ? (
              <IconButton color="primary" onClick={(e) => doneHandler(e.currentTarget.dataset.id)} data-id={id} sx={{ backgroundColor: "#fff", border: "1px solid #333" }}>
                <Done />
              </IconButton>
            ) : (
              <IconButton color="primary" onClick={(e) => undoneHandler(e.currentTarget.dataset.id)} data-id={id} sx={{ backgroundColor: "#fff", border: "1px solid #333" }}>
                <Close />
              </IconButton>
            )}
          </>
        )}
      </div>
    </li >
  );
};

export default TaskCard;
