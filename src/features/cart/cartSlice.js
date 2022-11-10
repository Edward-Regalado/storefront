import { createSlice } from '@reduxjs/toolkit';

// let cartItems = [];

const initialState = {
    count: 0,
    cartItems: [],
    cartTotal: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartItems.push(action.payload);
            state.count += 1;
            state.cartTotal += action.payload.price;
            // console.log('action payload: ', action.payload);
            // console.log('cart total: ', state.cartTotal);
            // console.log('action: ', action.payload);
            // console.log('itemsInCart: ', state.cartItems);
            // console.log('count: ', state.count);
        },
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
