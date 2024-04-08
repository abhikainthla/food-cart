import React from 'react'
import { useState } from 'react';
import { IoIosTimer } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
function FoodCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  function handleAddToFav(){
    setIsFavorite(!isFavorite);
  }
  return (
    <div className='food-menu'>
      <div className='menu-top'>
        <img src={props.food.image}></img>
      </div>
      <label className='food-rating'>{props.food.rating} <FaStar color='#ffc529' /></label>
      <label className='add-to-fav'><FaHeart color={isFavorite ? '#ed272b' : '#fff'} onClick={handleAddToFav}/></label>
      <div className='menu-bottom'>
        <h2 className='food-name'>{props.food.name}</h2>
        <p className='food-price'>Price: {props.food.price}/serving</p>
        <span><CiDeliveryTruck color='#fa4a0c' /> Free Delivery</span><span><IoIosTimer color='red' /> 15-20 mins</span> 
      </div>

    </div>
  )
}

export default FoodCard