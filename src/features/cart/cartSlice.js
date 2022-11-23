import { createSlice } from '@reduxjs/toolkit';
// import Chance from 'chance';
// const chance = new Chance();

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
        },
        deleteFromCart(state, action) {
            let itemToBeDeleted = action.payload._id;
            state.cartItems = state.cartItems.filter(item => item._id !== itemToBeDeleted);
            state.count = state.cartItems.length;
        },
        decrementTotal(state, action){
            let price = action.payload.price;
            state.total -= price;
        },
        incrementTotal(state, action){
            let price = action.payload.price;
            state.total += price;
        }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
