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
    margin: '30px',
    flexWrap: 'wrap',
    // minWidth: '200px'
  },
  card: {
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.1)',
    width: '20%',
    padding: '10px',
    margin: '15px 0px',
    background: 'white',
    border: '1px solid #d4d1d1',
    borderRadius: '10px',
    minWidth: '200px'
  },
  cardAction: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-around'
  },
};

function ProductList(){
      const products = useSelector(state => state.products.allProducts); // get all products from products array
      const itemsInCart = useSelector(state => state.cart.cartItems); // get items from cart
      const dispatch = useDispatch();

      console.log('ITEMS IN CART: ', itemsInCart);

      function handleAddToCart(item){
        dispatch(cartSlice.actions.addToCart(item));
        // console.log('item sent to payload----->: ', item);
      }
      let renderedProducts = [];
      if(products.length > 0){
        renderedProducts = products.map((item, idx) => (
            <Card key={idx} sx={styles.card}>
              <CardMedia image={item.image} sx={{ height: '150px'}}/>
              <CardContent sx={styles.cardAction}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography align='center'>
                  {item.name}
                </Typography>
                <Typography align='center'>
                  Price: ${item.price}
                </Typography>
                <Typography align='center'>
                  Quantity: {item.inventory}
                </Typography>
                </Box>
              </CardContent>
              <CardActions sx={styles.cardAction}>
                <Button value={item} onClick={() => handleAddToCart(item)} size='small' variant='contained' color='primary'>Add to Cart</Button>
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
