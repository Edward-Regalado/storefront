import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/material/styles';


function Footer() {

  return (
    <AppBar position="static" sx={{padding: '20px'}}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'column'}}>
        <Typography variant="h5" >
          &copy; 2022 Tony Regalado
        </Typography>
        <Typography sx={{ padding: '1rem'}} variant="subtitle1" >
          React + Redux + Material UI
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Footer;