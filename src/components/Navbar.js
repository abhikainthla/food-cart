import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css";
import { GiOldWagon } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { MdReviews } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
  
function Navbar() {
  
    
  return (
    <div className='navbar'>
        <div className='logo'><GiOldWagon color='#c82125' /><span className='logo-left'>Food</span><span className='logo-right'>Cart</span></div>
        <div className='nav-links'>
            <ul>
                <li>
                <NavLink to="/" activeClassName='active'>Home</NavLink> 
                    </li>
                    
                <li>
                <NavLink to="/reviews" activeClassName='active'>Reviews</NavLink> 
                </li>
                <li>
                <NavLink to="/cart" activeClassName='active'>Cart</NavLink> 
                </li>
            </ul>
        </div>
        <div className='nav-links-mobile'>
            <ul>
                <li>
                <NavLink to="/" activeClassName='active'><GoHomeFill /></NavLink> 
                    </li>
                    
                <li>
                <NavLink to="/reviews" activeClassName='active'><MdReviews /></NavLink> 
                </li>
                <li>
                <NavLink to="/cart" activeClassName='active'><FaShoppingCart /></NavLink> 
                </li>
            </ul>
        </div>
        <div className="nav-buttons">
        <button className="sign-up">
        <NavLink to="/signup" className="log-in">
                    Sign up
                </NavLink>
        </button>
        <button>
                <NavLink to="/login" className="log-in">
                    Log in
                </NavLink>
                </button>
        </div>

    </div>
  )
}

export default Navbar