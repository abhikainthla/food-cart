import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import Faq from './components/Faq';
import Cart from './components/Cart';
import Home from './components/Home'; // Import Home component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Render Home component for path '/' */}
        <Route path="/reviews" element={<Faq />} /> {/* Render Faq component for path '/reviews' */}
        <Route path="/cart" element={<Cart />} /> {/* Render Cart component for path '/cart' */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
