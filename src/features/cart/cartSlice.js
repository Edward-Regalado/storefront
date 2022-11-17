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
            // let item = action.payload;
            // let newId = chance.bb_pin();
            // item.id = newId;
            // state.cartItems.push(item);
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
