import React, { useContext, useState } from 'react';
import '../stylesheets/form.scss';
import { TextField, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import { TaskContext } from '../contexts/TaskContext';
import { ActionTypes } from '../hooks/TaskReducer';

const Form: React.FC = () => {
  const context = useContext(TaskContext);
  const { dispatch } = context;
  const [value, setValue] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const clickHandler = (e: any): void => {
    e.preventDefault();
    dispatch({
      type: ActionTypes.ADD,
      payload: value
    })
    setValue("");
  }

  return (
    <div className="form__container">
      <form onSubmit={clickHandler}>
        <TextField variant="standard" placeholder="Input your task here" value={value} onChange={changeHandler} sx={{ padding: "1rem", width: "50vw" }} autoFocus required />
        <IconButton color="primary" onClick={clickHandler} sx={{ border: "1px solid #333" }}>
          <Add />
        </IconButton>
      </form >
    </div >
  )
}

export default Form;
