import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
);
