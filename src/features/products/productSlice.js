import { createSlice } from '@reduxjs/toolkit';
import { data as allProducts } from './data';

// let arr = []

// initial state is used to set the default state properties until one of our reducer methods is called
const initialState = {
    currentCategory: 'all',
    category: '',
    allProducts,
    currentProduct: '',
    productDetails: null,
    // categoryList,
    productSelected: allProducts,
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
            state.productSelected = state.category === 'all' ? state.allProducts : state.allProducts.filter((item) => item.category === state.category);
        },
        productDetails(state, action){
            console.log('item details action payload', action.payload);
            state.productDetails = action.payload;
        }, 
        decrementInventory(state, action){
            let item = state.allProducts.find(x => x.id === action.payload.id);
            item.inventory--;
            state.productSelected = state.category === 'all' ? state.allProducts : state.allProducts.filter((item) => item.category === state.category);
        },
        incrementInventory(state, action){
            let item = state.allProducts.find(x => x.id === action.payload.id);
            item.inventory++;
            state.productSelected = state.category === 'all' ? state.allProducts : state.allProducts.filter((item) => item.category === state.category);
        },
        outOfStock(state, action){
            let item = state.allProducts.find(x => x.id === action.payload.id);
            console.log(`${item.name} is out of stock!`);
            // item.inventory = 'out of stock';
            // state.productSelected = state.category === 'all' ? state.allProducts : state.allProducts.filter((item) => item.category === state.category);
        }
    }
});

export const { selectCategory, decrementInventory, incrementInventory, productDetails } = productSlice.actions;

export default productSlice.reducer;
