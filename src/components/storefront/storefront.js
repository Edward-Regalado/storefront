import React from 'react';
import { Container } from '@mui/material';
import Categories from '../../features/products/categories';
import Products from './products';

const styles = {
  container: {
    display: 'flex',
     flexDirection: 'column',
      // border: '2px solid black'
  }
};

function Storefront() {
  return (
    <Container maxWidth='xl' sx={styles.container}>
        <Categories />
        <Products />
    </Container>
  )
}

export default Storefront;