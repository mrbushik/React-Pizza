import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import {Home} from './pages/Home'
import {Cart} from './pages/Cart'

import './scss/app.scss'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
<App/>

{/* <Route path="/" element={<App />} exact /> */}
{/* <Route path="/cart" element={<Cart />} exact /> */}
</BrowserRouter>
  </React.StrictMode>
);


