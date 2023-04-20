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

  const clickHandler = (): void => {
    dispatch({
      type: ActionTypes.ADD,
      payload: value
    })
    // alert('test');
  }
  return (
    <form>
      <div>
        <TextField placeholder="Put your task here" value={value} onChange={changeHandler} required />
        <span>
          <IconButton onClick={() => clickHandler()}>
            <Add />
          </IconButton>
        </span>
      </div>
    </form >
  )
}

export default Form;
