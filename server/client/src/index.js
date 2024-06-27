import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Provider store = {store}>
  <App />
  </Provider>
</BrowserRouter>
);

reportWebVitals();
