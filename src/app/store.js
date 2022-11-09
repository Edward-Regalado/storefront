import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/products/productSlice';
import cartReducer from '../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    // the 'products' key is what we use to access state throughout the app.. state.product.category or state.product.filteredProducts.
    products: productReducer,
    cart: cartReducer 
  },
});

export default store;