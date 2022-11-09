import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from '../cart/cartSlice';
import { Container, Box, Typography, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar } from '@mui/material';

const styles = {
  box: {
    // border: '2px solid black',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    margin: '30px'
  },
  card: {
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.1)',
    width: '20%',
    padding: '10px',
    background: 'white',
    border: '1px solid #d4d1d1',
    borderRadius: '10px',
  },
  cardAction: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-around'
  },
};

function ProductList(){
      const products = useSelector(state => state.products.allProducts); // []
      const dispatch = useDispatch();
      const [item, setItem] = useState();

      function handleAddToCart(e){
        dispatch(cartSlice.actions.addToCart(e.target.value));
        console.log('value----->: ', e.target.value);
      }

      console.log('products in productList: ', products);
      let renderedProducts = [];
      if(products.length > 0){
        renderedProducts = products.map(item => (
            <Card key={item.id} sx={styles.card}>
              <CardMedia image={item.image} sx={{ height: '150px'}}/>
              <CardContent sx={styles.cardAction}>
                <Typography>
                  {item.name}
                </Typography>
              </CardContent>
              <CardActions sx={styles.cardAction}>
                <Button value={item} onClick={(e) => handleAddToCart(e)} size='small' variant='contained' color='primary'>Add to Cart</Button>
                <Button size='small' variant='outlined' color='primary'>View Details</Button>
              </CardActions>
            </Card>
        ));
    }

    return (
        <Box sx={styles.box}>
            {renderedProducts}
        </Box>
    )
}

export default ProductList;