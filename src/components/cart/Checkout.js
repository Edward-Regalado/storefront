import React from 'react';
import { Box, Paper, List, ListItem, ListItemText, Grid, TextField, Button, Typography } from '@mui/material';
// List ListItem ListItemText Grid Pater Textfield Button
import { useSelector } from 'react-redux';

const styles = {
  box: {
    width: 'auto',
    marginLeft: '20px',
    marginRight: '20px',
  },
}

function Checkout() {

  const total = useSelector(state => state.cart.total);
  console.log('total: ', total);

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
                <Button variant='contained' color='primary'> Place Your Order</Button>
              </Grid>
            </Grid>
          </List>
        </Paper>
      </form>
      <Box>
        {}
      </Box>
    </Box>
  )
}

export default Checkout;