import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { IoIosTimer } from 'react-icons/io';
import { CiDeliveryTruck } from 'react-icons/ci';
import { MdDeleteForever } from "react-icons/md";
import cartIcon from './assets/icons8-empty-cart.gif';
import { NavLink } from 'react-router-dom'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import './Cart.css';

function Cart() {
  const [cart, setCart] = useState([]);
  const [toggleWindow, setToggleWindow] = useState(false);
  const [mobile, setMobile] = useState();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState();
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [notes, setNotes] = useState('');
  const [instruction, setInstruction] = useState('')



  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);
  function removeFromCart(item){
    let newCart= cart.filter((i)=> i!== item)
    localStorage.setItem("cart",JSON.stringify(newCart));
    setCart(newCart);
  }

  function resetCart(){
    localStorage.removeItem("cart");
    setCart([]);
  }

  function calculateTotal(){
    return cart.reduce((accumulator, currentValue) => accumulator + Number(currentValue.price*currentValue.quantity) ,0 )
  }

  function proceedToPayment(){
    setToggleWindow(true);
  }
  function setWindowState(){
    setToggleWindow(false);
  }

  const amount = calculateTotal(cart).toFixed(2)*100;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (e) => {
    if(!mobile || !pincode || !name ||  !address ){
      alert("Please fill all required the fields");
      return;
    }

    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_7A6kAcwf6De6CI", 
      amount, 
      currency,
      name: "FoodCart", 
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          "http://localhost:5000/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        name: name, 
        address: address,
        contact: mobile, 
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#ed272b",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    resetCart();
    e.preventDefault();
  };

  function handleNotes(e){
    setNotes(e.target.value);
  }

  function handleInstructions(e){
    setInstruction(e.target.value)
  }

  return (
    <div>
      <Navbar />
      <div className='cart-container'>
        <div className={toggleWindow?"hide-cart":"show-cart"}>
        <h1>Your Cart</h1>
        <div className={(cart.length>0)?"cart":"empty"}>
          <div className={(cart.length>0)?"cart-full":"cart-empty"}><h2>Your Cart Is Empty</h2>
          <img src='https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif'></img>
          </div>
        {cart.map((item, index) => (
          <div className='cart-item' key={index}>
            <div className='cart-image'>
              <img src={item.image} alt={item.name} />
            </div>
            <div className='cart-details'>
              <h2>{item.name}</h2>
              <span style={{marginLeft:"8px"}}>
          <CiDeliveryTruck color="#fa4a0c" /> Free Delivery
         </span>
        <span style={{marginLeft:"8px"}}>
          <IoIosTimer color="red" /> 15-30 mins
        </span>
              <p className='cart-price'>₹{item.price}</p>
            </div>
            <div className='cart-quantity'>
              {item.quantity}x
            </div>
            <div className='delete-item' onClick={()=> removeFromCart(item)}>
            <MdDeleteForever style={{width:"auto", height:"25px",}} color='#ed272b' />
            </div>
          </div>
        ))}
        <div className={(cart.length>0)?"notes":"no-notes"}>
          <div className='chef-notes'>
            <h3>Note To Chef:</h3>
            <textarea placeholder='Any special requests for our chef?' onChange={handleNotes} value={notes}/>
          </div>
          <div className='delivery-notes'>
            <h3>Note To Delivery Team:</h3>
            <textarea placeholder='Any specific instructions for the delivery team?' onChange={handleInstructions} value={instruction}/>
          </div>
        </div>
        <div className={(cart.length>0)?"total":"no-total"}>
          <img src={cartIcon}></img> Total: <span className='rupee-symbol'>₹</span>{calculateTotal()}.00
        </div>
        </div>
        <div className={(cart.length>0)?"no-button":"cart-button"}>
        <NavLink to="/" activeClassName='active'><button className='goToHome'>Go To Home</button></NavLink> 
        </div>
        <div className={(cart.length>0)?"cart-button":"no-button"}>
          <button onClick={resetCart} className='reset-button'>Reset Cart</button>
          <button onClick={proceedToPayment} className='proceed-payment'>Proceed To Payment</button>
        </div>
        </div>
        <div className={toggleWindow?"checkout-modal":"hide-checkout"}>
          <span onClick={setWindowState} className='close-window'><IoArrowBackCircleSharp style={{width:"35px", height:"auto", cursor:"pointer"}} color=" #fff" /></span>
          <h1>Checkout Page</h1>
          <div className='checkout-page'>
            <div className='checkout-animation'>
            <video loop autoPlay>
              <source
                src="https://cdn.dribbble.com/users/2874478/screenshots/15675229/media/3d60f9c652584e5ad0b637ec3db2f2fa.mp4"
                type="video/mp4"
              />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
            </div>
          
          <div className='address-details'>
            <h2>Enter Your Details</h2>
            <div className='small-input-container'>
            <input className='small-input' onChange={(e)=>setName(e.target.value)} type='text' required placeholder='Name'></input>
            <input className='small-input' onChange={(e)=>setAddress(e.target.value)} type='text' required placeholder='Enter Address'></input>
            </div>
            <input  type='text' placeholder='Enter Building No. and Street Name (Optional)'></input>
            <div className='small-input-container'>
            <input className='small-input' onChange={(e)=>setPincode(e.target.value)} type='number' required placeholder='Enter Pincode'></input>
            <input className='small-input' onChange={(e)=>setMobile(e.target.value)}type='number' required placeholder='Enter Mobile Number'></input>
            </div>
            <input type='text'  placeholder='Enter Landmark (Optional)'></input>
          </div>
          </div>
          <div className='checkout-payment'>
            <div className='invoice'>
            <p>Amount: <span className='rupee-symbol'>₹</span>{calculateTotal()}.00 <span className='tax-span'>(tax-included)</span></p>
            <hr/>
            <p>Discount:  {discount}% OFF</p>
            <hr/>
          <h3>Net Amount: <span className='rupee-symbol'>₹</span>{calculateTotal()}.00</h3>
          </div>
          <div className='invoice-action'>
            <input value={coupon} onChange={(e)=>setCoupon(e.target.value)} type='text' placeholder='APPLY COUPON CODE'></input>
          <button onClick={paymentHandler}>Pay</button>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
