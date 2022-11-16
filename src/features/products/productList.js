import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from '../cart/cartSlice';
import { productSlice } from '../products/productSlice';
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
      const item = useSelector(state => state.products.updatedInventory);
      // const details = useSelector(state => state.products.productDetails); // get all products from products array
      // const itemsInCart = useSelector(state => state.cart.cartItems); // get items from cart
      const dispatch = useDispatch();

      // console.log('ITEMS IN CART: ', itemsInCart);
      // console.log('products: ', products);
      console.log('updated inventory: ', item);

      function handleAddToCart(item){
        dispatch(cartSlice.actions.addToCart(item));
        dispatch(productSlice.actions.updateInventory(item));
        // console.log('item sent to payload----->: ', item);
      }

      function handleProductDetails(item){
        console.log('item details button clicked: ', item);
        dispatch(productSlice.actions.productDetails(item));
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
                <Link to={`/details/${item.name}`} value={item} style={{textDecoration: 'none'}} >
                  <Button value={item} size='small' variant='outlined' color='primary' onClick={() => handleProductDetails(item)}  >View Details</Button>
                </Link>
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
