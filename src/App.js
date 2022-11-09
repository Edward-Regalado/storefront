import React from 'react';
import { Provider } from 'react-redux';
// import { ThemeContext } from './context/ThemeSettings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Storefront from './components/storefront/storefront';
import Checkout from './components/cart/Checkout';
import Details from './components/products/details'
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import store from './app/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Routes>
          <>
            <Route path='/' element={<Storefront />} />
            <Route path='/details' element={<Details />} />
            <Route path='/checkout' element={<Checkout />} />
          </>
        </Routes>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
