import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/products/productSlice';
import cartReducer from '../features/cart/cartSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';


const rootPersistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  cart : cartReducer,
  products: productReducer,
});

// const persistCartConfig = {
//   key: 'cart',
//   storage,
// }
// const persistProductConfig = {
//   key: 'product',
//   storage,
// }

// const persistedProductReducer = persistReducer(persistProductConfig, productReducer);
// const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);

const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedRootReducer,
    // applyMiddleware
});

export const persistor = persistStore(store);