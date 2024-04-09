import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Cart.css';

function Cart() {


  return (
    <div>
      <Navbar />
      <div className='cart'>
        <h1>Your Cart</h1>
          <div className='cart-item'>
            <div className='cart-image'>
              <img src='https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=900'  />
            </div>
            <div className='cart-details'>
              <h2>Name</h2>
              <p>Price</p>
            </div>
            <div className='cart-quantity'>
              Quantity: 
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
