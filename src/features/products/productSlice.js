import { createSlice } from '@reduxjs/toolkit';
import { data as allProducts } from './data';

// initial state is used to set the default state properties until one of our reducer methods is called
const initialState = {
    currentCategory: 'all',
    category: '',
    allProducts,
    currentProduct: '',
    productDetails: null,
    updatedInventory: null,
}

// think of the "slices" and little pieces of state management logic
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        selectCategory(state, action) {
            // console.log('action.payload', action.payload);
            state.category = action.payload;
            state.currentCategory = action.payload;
            state.allProducts = state.category === 'all' ? allProducts : allProducts.filter((item) => item.category === state.category);
        },
        productDetails(state, action){
            console.log('item details action payload', action.payload);
            state.productDetails = action.payload;
        }, 
        updateInventory(state, action){
            let item = state.allProducts.find(x => x.id === action.payload.id);
            item.inventory -= 1;
            state.allProducts.map(x => x.id === action.payload.id ? x : item);
        }
    }
});

export const { selectCategory } = productSlice.actions;

export default productSlice.reducer;
