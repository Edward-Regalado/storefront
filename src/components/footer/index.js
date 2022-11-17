import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import Fab  from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SimpleCart from '../cart/SimpleCart';

function Footer() {

  return (
    <Container maxWidth='false' sx={{display: 'flex', backgroundColor: '#1976d2', padding: '10px', color: '#fff'}}>
    {/* <Container position="static" sx={{padding: '20px'}}> */}
      <Toolbar sx={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
        <Typography variant="h5" >
          &copy; 2022 Tony Regalado
        </Typography>
        <Typography sx={{ padding: '1rem'}} variant="subtitle1" >
          React + Redux + Material UI
        </Typography>
        {/* <Fab color="secondary" aria-label="add">
          <ShoppingCartIcon />
        </Fab> */}
      </Toolbar>
        <SimpleCart />
    </Container>
    // </AppBar>
  )
}

export default Footer;

