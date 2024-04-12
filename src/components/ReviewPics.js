import React from 'react'

function ReviewPics(props) {
  return (
    <div className='pics-container'>
        <div className='review-pics'><img src={props.image}></img></div>
    </div>
  )
}

export default ReviewPics