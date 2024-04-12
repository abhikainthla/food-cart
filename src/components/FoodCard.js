
import React, { useState } from 'react';
import { IoIosTimer } from 'react-icons/io';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaStar, FaHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'


function FoodCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleAddToFav() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="food-menu">
      <div className="menu-top">
        <img src={props.food.image} alt={props.food.name} />
      </div>
      <label className="food-rating">
        {props.food.rating} <FaStar color="#ffc529" />
      </label>
      <label className="add-to-fav">
        <FaHeart
          color={isFavorite ? '#ed272b' : '#fff'}
          onClick={handleAddToFav}
        />
      </label>
      <div className="menu-bottom">
        <h2 className="food-name">{props.food.name}</h2>
        <p className="food-price">Price: ₹{props.food.price}/serving</p>
        <span>
          <CiDeliveryTruck color="#fa4a0c" /> Free Delivery
        </span>
        <span>
          <IoIosTimer color="red" /> 15-30 mins
        </span>
      </div>
      <div className="quantity-buttons">
        <button onClick={props.onMinusQuantity}>-</button>
        <span>{props.quantity}</span>
        <button onClick={props.onAddQuantity}>+</button>
      </div>
      <div className="menu-buttons">
        <button onClick={props.onAddToCart}>Add To Cart</button>
        <NavLink to="/cart" activeClassName='active'>
        <button>Go To Cart</button>
        </NavLink>

      </div>
    </div>
  );
}

export default FoodCard;
