import { Typography } from '@mui/material';
import React from 'react';
import ProductList from '../../features/products/productList';
import CurrentCategory from './currentCategory';

// import { Container, Box, Typography, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar } from '@mui/material';
// import Photo from '../../assets/images/camera.jpg';
// import { useSelector } from 'react-redux';


function Products() {
  return (
    <>
      <CurrentCategory />
      <ProductList />
    </>
  )
}

export default Products;