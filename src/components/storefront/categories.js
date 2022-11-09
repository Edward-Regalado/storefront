import React from 'react';
import { Container, Typography } from '@mui/material'

function Categories() {
  return (
      <Container maxWidth='sm' sx={{ border: '2px solid black'}}>
        <Typography variant='h4' align='center' color='textPrimary'>Browse our Categories</Typography>
     </Container>
  
  )
}

export default Categories;