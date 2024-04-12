import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import Faq from './components/Faq';
import Cart from './components/Cart';
import Home from './components/Home'; // Import Home component
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/reviews" element={<Faq />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
