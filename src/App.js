import React, { useEffect } from 'react';
// import { ThemeContext } from './context/ThemeSettings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Storefront from './components/storefront/storefront';
import Checkout from './components/cart/Checkout';
import Details from './components/products/details'
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import { getProducts } from '../src/features/products/productSlice';
import { useSelector, useDispatch } from 'react-redux';
import './app.css';

function App() {

  const { isLoading } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  // call the getProducts function from here- we can pass data such as product ID, name, etc..
  useEffect(() => {
  console.log('useEffect called');
  // getProducts();
  dispatch(getProducts());
  }, [dispatch]);

  if(isLoading){
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
  return (
    <Router>
      <Header />
      <Routes>
        <>
          <Route path='/' element={<Storefront />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/checkout' element={<Checkout />} />
        </>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
