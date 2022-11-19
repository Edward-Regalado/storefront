import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useEffect } from 'react'
// import { data as allProducts } from './data';
const url = 'http://localhost:3001'

const initialState = {
    currentCategory: 'all',
    category: '',
    allProducts: [],
    currentProduct: '',
    productDetails: null,
    productSelected: [],
    isLoading: true,
    // items: [],
}


export const getProducts = createAsyncThunk(
    'products/getProducts', 
    async (thunkAPI) => {
    try {
        // console.log('data: ', data);
        // console.log('thunkAPI: ', thunkAPI);
        // console.log('thunkAPI: ', thunkAPI.getState());
        const res = await axios.get(url)
        let arr = [];
        for(const item of res.data){
            arr.push(item);
            // state.allProducts.push(item);
            // items.push(item);
        }
        return arr;
    } catch (e) {
        console.log('error: ', e.message);
    }
})


// think of the "slices" and little pieces of state management logic
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // setProducts(state, action){
        //     // action.payload will be the res.data object from my axios call
        //     // state.productsArray = action.payload; 
        // },
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
        }
    }, 
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            console.log('action in extra reducers: ', action);
            state.isLoading = false;
            state.productSelected = action.payload;
            state.allProducts = action.payload;
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        })
    },
});

export const { selectCategory, decrementInventory, incrementInventory, productDetails } = productSlice.actions;

export default productSlice.reducer;
