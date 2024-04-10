import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Faq from './components/Faq';
import Cart from './components/Cart';
import Home from './components/Home';
React.useLayoutEffect = React.useEffect; 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Faq />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
