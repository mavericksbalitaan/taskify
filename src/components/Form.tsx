import React from 'react';
import '../stylesheets/form.scss';
import { TextField, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';

const Form: React.FC = () => {
  const clickHandler = (): void => {
    alert('test');
  }
  return (
    <form>
      <div>
        <TextField placeholder="Put your task here" required />
        <span>
          <IconButton onClick={clickHandler}>
            <Add />
          </IconButton>
        </span>
      </div>
    </form >
  )
}

export default Form;
