import React from 'react'

function FoodItems(props) {
  return (
    <div className='items'>
        <div className='items-img'><img src={props.item.image}></img></div>
        <div className='items-name'><h1>{props.item.name}</h1></div>
    </div>
  )
}

export default FoodItems