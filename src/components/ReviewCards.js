import React from "react";

function ReviewCards({ review }) {
  return (
    <div className="review-cards" key={review.id}>
      <div className="user-info">
        <div className="user-data">
        <div className="user-image">
          <img src={review.image}></img>
        </div>{" "}
        <div className="user-details">
          <h2>{review.user}</h2>
          <span>{review.date}</span>
        </div>
        </div>
        <div>
          <p className="card-rating">{review.rating}</p>
        </div>
      </div>
      <p className="comment">{review.comment}</p>
      <hr />
    </div>
  );
}

export default ReviewCards;
