import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    itemsInCart: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.itemsInCart.push(action.payload);
            state.count += 1;
            console.log('action payload: ', action.payload);
            console.log('action: ', action.payload);
            console.log('itemsInCart: ', state.itemsInCart);
            console.log('count: ', state.count);
        },
    }
});


export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
