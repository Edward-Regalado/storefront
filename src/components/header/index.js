import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeSettings';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {

  const theme = useContext(ThemeContext);

  return (
    <>
      <AppBar position='relative' style={theme}>
        <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
            <Typography variant='h5' align='center' color='textPrimary' >
              Store Front
            </Typography>
          </Link>
          <Link to='/checkout' style={{textDecoration: 'none'}}>
            <Box>
              <Button variant='contained' sx={{background: 'white', color: 'black'}}><ShoppingCartIcon />Cart (0)</Button>
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;