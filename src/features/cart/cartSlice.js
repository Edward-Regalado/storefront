import { createSlice } from '@reduxjs/toolkit';

// let cartItems = [];

const initialState = {
    count: 0,
    total: 0,
    cartItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartItems.push(action.payload);
            state.count = state.cartItems.length;
            state.total += action.payload.price;
        },
        deleteFromCart(state, action) {
            let itemToBeDeleted = action.payload.id;
            state.cartTotal -= action.payload.price;
            state.cartItems = state.cartItems.filter(item => item.id !== itemToBeDeleted);
            state.count = state.cartItems.length;
        }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
