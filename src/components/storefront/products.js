import React from 'react';
import { Container, Box, Typography, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar } from '@mui/material';
import Photo from '../../assets/images/camera.jpg';

function Products() {

  return (
    <Container maxWidth='xl' align='center' sx={{border: '2px solid black'}}>
      <Typography variant='h3' color='textSecondary'>Product list</Typography>
        <Box maxWidth='30%'>
          <Card sx={{height: '100%'}}>
            <CardMedia image={Photo} sx={{ height: '150px'}}/>
            <CardContent>
              <Typography>
                Production Information
              </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
              <Button size='small' variant='contained' color='primary'>Add to Cart</Button>
              <Button size='small' variant='outlined' color='primary'>View Details</Button>
            </CardActions>
          </Card>
        </Box>
    </Container>
  )
}

export default Products;


// container specifies the type of grid you want
{/* <Grid container spacing={4}>
  numbers specifies the width of each item.. 12 will take up the full width, 6 will display 2 grid items per row, 4 will display 3 items per row
  <Grid item xs={12} sm={6} md={4}>
    <Card>

    </Card>
  </Grid>
</Grid> */}