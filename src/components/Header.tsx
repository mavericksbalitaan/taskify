import React from 'react';
import { Typography } from '@mui/material';
import '../stylesheets/header.scss';

const Header: React.FC = () => {
  return (
    <>
      <header>
        <Typography variant="h2">Taskify</Typography>
      </header>
    </>
  )
}

export default Header
