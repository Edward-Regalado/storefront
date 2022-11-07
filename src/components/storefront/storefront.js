import React from 'react';
import { Container, Box } from '@mui/material';
import Categories from './categories';
import Products from './products';

function Storefront() {
  return (
    <Container maxWidth='xl' sx={{display: 'flex', flexDirection: 'column', border: '2px solid black'}}>
        <Categories />
        <Products />
    </Container>
  )
}

export default Storefront;