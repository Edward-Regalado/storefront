import React, { useState } from 'react';
import { Box, Paper, List, ListItem, ListItemText, Grid, TextField, Button, Typography, Alert } from '@mui/material';
// List ListItem ListItemText Grid Pater Textfield Button
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../../features/cart/cartSlice';

export function alertFunction(){
  return (
    <Box>
      <Alert variant='outlined' severity='success' sx={{ mb: 2}}>
        <Typography variant='h4'>Thank you for your order!</Typography>
      </Alert>
    </Box>
  );
}

const styles = {
  box: {
    width: 'auto',
    marginLeft: '20px',
    marginRight: '20px',
  },
  cartBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

function Checkout() {

  const dispatch = useDispatch();
  const [alert, setAlert ] = useState('');
  // const clearCart = useSelector(state => state.cartSlice.clearCart());
  const cartItems = useSelector(state => state.cart.cartItems);

  const total = useSelector(state => state.cart.total);
  console.log('total: ', total);

  function clearAlert(){
    setAlert('');
  }

  setTimeout(clearAlert, 10000);

  function submitAlert(){
    dispatch(cartSlice.actions.clearCart());
    setAlert(alertFunction);
  }

//   let items =  [];
//   if(cartItems > 0){
//     items = cartItems.map((item, idx) => (
//       <Box key={idx}>
//         <Typography>{item.name}</Typography>
//         <Typography>{item.price}</Typography>
//         <Typography>{item.inventory}</Typography>
//         <Typography>description</Typography>
//       </Box>
//   ));
// };

  return (
    <Box sx={{alignItems: 'center', justifyContent: 'center', border: '2px solid red', margin: '20px'}}>
      <form>
        <Paper>
          <List>
            <ListItem>
              <ListItemText>
                  Order Summary
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Total $ {total}  
              </ListItemText>
            </ListItem>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant='h6' gutterBottom>
                    Billing Address
                </Typography>
                <TextField name='name' label='Full Name'/>
                <TextField name='address' label='Address'/>
                <TextField name='city' label='City'/>
                <TextField name='state' label='State'/>
                <TextField name='zip' label='Zip'/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant='h6' gutterBottom>
                    Payment Details
                </Typography>
                <TextField name='credit_card' label='Credit Card'/>
                <TextField type='date' label='Expiration' InputLabelProps={{shrink: true}}
                />
              </Grid>
              <Grid item>
                <Button variant='contained' color='primary' onClick={() => submitAlert()}> Place Your Order</Button>
              </Grid>
            </Grid>
          </List>
        </Paper>
      </form>
      <Box elevation={6}>
          {alert}
      </Box>
      <Box style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant='h4'>Cart Items</Typography>
        {cartItems.map((item, idx) => (
          <Box key={idx} sx={styles.cartBox}>
            <img src={item.image} style={{width: '50px', height: '50px', borderRadius: '50px', border: 'none', marginRight: '20px'}} alt={item.idx}/>
            <Typography variant='h5' style={{marginRight: '20px'}}>Name: {item.name}</Typography>
            <Typography variant='h5' style={{marginRight: '20px'}}>Price: ${item.price}</Typography>
            <Typography variant='h5' style={{marginRight: '20px'}}>Description: {item.description}</Typography>
          </Box>
        ))
      }
      </Box>
    </Box>
  )
}

export default Checkout;