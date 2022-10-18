import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'

import store from './App/store';
import App from './App.jsx'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
