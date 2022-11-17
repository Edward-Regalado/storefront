import React from 'react';
import { Provider } from 'react-redux';
// import { ThemeContext } from './context/ThemeSettings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Storefront from './components/storefront/storefront';
import Checkout from './components/cart/Checkout';
import Details from './components/products/details'
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import { store, persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import './app.css';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header />
          <Routes>
            <>
              <Route path='/' element={<Storefront />} />
              <Route path='/details/:id' element={<Details />} />
              <Route path='/checkout' element={<Checkout />} />
            </>
          </Routes>
          <Footer />
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
