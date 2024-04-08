import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
    <div className='footer-main'>
        <div className='footer-company'>
            <h2>Company</h2>
            <ul>
                <li>About us</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className='footer-legal'>
            <h2>Legal</h2>
            <ul>
                <li>Tearm & Conditions</li>
                <li>Refund & Cancellation</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
            </ul>
        </div>
        <div className='footer-socials'>
            <h2>Follow us</h2>
            <ul>
                <li className='socials'><FaFacebook className='social-icons'/> <FaInstagram className='social-icons'/> <FaSquareXTwitter className='social-icons'/></li>
                <li><span>Recieve exclusive offers in your mailbox</span></li>
                <li><input type='email' placeholder='Enter your email'/> <button>Subscribe</button></li>
            </ul>
        </div>
    </div>
    <hr/>
    <div className='footer-bottom'>
        <span>All rights reserved <FaRegCopyright style={{marginBottom:"-2.5px"}} /> FoodCart</span>
    </div>
    </div>
  )
}

export default Footer