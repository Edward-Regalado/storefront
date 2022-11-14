import React from 'react';
import { Container } from '@mui/material'
import { useSelector } from 'react-redux';

function Details() {

  const details = useSelector(state => state.products.productDetails);

  return (
    <Container sx={{height: '50vh', color: 'black'}}>
      <h1>Products Details</h1>
      {details.id}
      {details.name}
      {details.description}
    </Container>
  )
}

export default Details;