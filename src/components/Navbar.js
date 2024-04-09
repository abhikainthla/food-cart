import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css";
function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'><span className='logo-left'>Food</span><span className='logo-right'>Cart</span></div>
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
        <div className="nav-buttons">
            <button className="sign-up">Sign up</button>
            <button className="log-in">Log in</button>
        </div>
    </div>
  )
}

export default Navbar