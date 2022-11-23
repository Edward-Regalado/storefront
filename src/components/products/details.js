import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Box, Typography, Button, Card, CardActions, CardContext, CardMedia, CardContent, Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import { cartSlice } from '../../features/cart/cartSlice';
import { productSlice } from '../../features/products/productSlice';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // border: '2px solid black',
  },
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    // border: '2px solid black',
  },
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
  imgCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '500px',
    height: '500px',
    marginTop: '20px',
    // backgroundColor: 'red',
  },
  cardImg: {
    width: '95%',
    height: '95%',
    margin: '10px'
  },
  cardImgDescription: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
  },
  buttonAddToCart: {
    // backgroundColor: 'blue',
    color: 'white',
    width: '87%',
    marginTop: '20px',
    marginBottom: '20px',
  },
  accordion: {
    borderRadius: '5px', 
    width: '87%', 
    margin: '10px 0px 50px 0px', 
  },
  relatedItemsBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '87%',
    marginBottom: '20px'
  },
  relatedItemsWrapper: {
    display: 'flex',
    width: '100%',
    // border: '1px solid red',
  },
  relatedItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // border: '2px solid black',
    width: '33%',
  }
};


function Details() {
  
  // let navigate = useNavigate();
  const dispatch = useDispatch();
  const relatedItems = useSelector(state => state.products.relatedItems);

  function handleAddToCart(item){
    if(item.inventory === 0){
      console.log('item is out of stock!');
    } else {
      dispatch(cartSlice.actions.addToCart(item));
      dispatch(cartSlice.actions.incrementTotal(item));
      dispatch(productSlice.actions.decrementInventory(item));
    }
  }

  const item = useSelector(state => state.products.productDetails);
  // console.log('image: ', item.image);
  return (
    // image container
    <Container sx={styles.container}>
      <Box component='div' sx={styles.mainWrapper}>
        <Typography variant='h4' style={{marginTop: '20px'}}>{item.name}</Typography>
      <Card sx={styles.imgCard}>
        <CardMedia image={item.image} sx={styles.cardImg} />
          <Box component='div' sx={styles.cardImgDescription}>
            <Typography variant='h6'>
              In Stock: ${item.inventory}
            </Typography>
            <Typography variant='h6'>
              Cost: ${item.price}
            </Typography>
          </Box>
      </Card>
      <Button value={item} sx={styles.buttonAddToCart} variant='contained' onClick={() => handleAddToCart(item)}>Add To Cart</Button>
      <Typography variant='h5'>Product Details</Typography>
      <Accordion sx={styles.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panella-content'>
          <Typography>
            Specifications
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{marginRight: '20px'}}>
            Description: {item.description}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Typography variant='h5'>Related Items</Typography>
      <Box component='div' sx={styles.relatedItemsBox}>
        <Box component='div' sx={styles.relatedItemsWrapper}>
        {relatedItems.map((item, idx) => (
          <Box key={idx} component='div' sx={styles.relatedItem} >
              <Typography>
                {item.name}
              </Typography>
              <img src={item.image} alt={item.name} style={{width: '50px', height:'50px', borderRadius: '50px'}}/>
            <Link to={`/details/${item._id}`}value={item} style={{TextDecoration: 'none'}}>
              <Button variant='contained'> Go</Button>
           </Link>
          </Box>
          ))}
        </Box>
      </Box>
      </Box>
    </Container>
  )
}

export default Details;