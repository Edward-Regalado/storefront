import { createSlice } from '@reduxjs/toolkit';
import { data as allProducts } from './data';

// initial state is used to set the default state properties until one of our reducer methods is called
const initialState = {
    category: '',
    allProducts,
}

// think of the "slices" and little pieces of state management logic
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        selectCategory(state, action) {
            console.log('action.payload', action.payload);
            state.category = action.payload;
            state.allProducts = state.category === undefined ? allProducts : allProducts.filter((item) => item.category === state.category);
        },
    }
});

export const { selectCategory } = productSlice.actions;

export default productSlice.reducer;

