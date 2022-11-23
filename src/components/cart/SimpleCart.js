import { useSelector } from 'react-redux';
import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { productSlice } from '../../features/products/productSlice';
import { cartSlice } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';
import './cart.css';


function SimpleCart() {
    const itemsInCart = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    console.log('items in cart: ', itemsInCart);

    function handleProductDetails(item){
        // console.log('item details button clicked: ', item);
        dispatch(productSlice.actions.productDetails(item)); // dispatch sends payload to the reducers
    }

    function actionToggle(){
        let action = document.querySelector('.action');
        action.classList.toggle('active');
    }

    function handleDelete(item){
        console.log('delete item in cart: ', item);
        dispatch(cartSlice.actions.deleteFromCart(item));
        dispatch(cartSlice.actions.decrementTotal(item));
        dispatch(productSlice.actions.incrementInventory(item));
    }

    return (
        <div className='action' onClick={()=> {actionToggle()}}>
            {itemsInCart.length > 0 ? <span style={{backgroundColor: '#76e461', borderRadius: '50%'}}><ShoppingCartIcon /></span> : 
            <span><ShoppingCartIcon /></span>
            }
            <div className='parent-item-div'>
                {itemsInCart.map((item, idx) => (
                    <div key={idx} className='single-item'>
                        <Link className='link' key={idx} value={item} to={`/details/${item.name}`}>
                            <Button className='button' value={item} onClick={() => handleProductDetails(item)}>
                            <img src={item.image} style={{width: '50px', height: '50px', borderRadius: '50px', border: 'none'}} alt={item.id} onClick={()=> handleProductDetails(item)}/>
                            {item.name}
                            </Button>
                        </Link>
                        <div className='delete-box'>
                            <Button value={item} onClick={()=> handleDelete(item)}> 
                                <DeleteTwoTone />
                                Delete
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SimpleCart;
