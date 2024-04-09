import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { MdReviews } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import './Faq.css'
import './Footer.css'
import ReviewCards from './ReviewCards';
function Faq() {
  const reviews = [
    {
      id: 1,
      user: "Alice",
      rating: 4.5,
      comment: "The delivery was super fast and the food was delicious! I ordered a pizza and it was still hot when it arrived. The toppings were fresh and the crust was perfectly crispy.",
      date: "2024-04-01",
      image:"https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=900"
    },
    {
      id: 2,
      user: "Bob",
      rating: 3.0,
      comment: "The food was okay, but the delivery took longer than expected. I ordered a burger and fries, and while the burger was decent, the fries were a bit soggy.",
      date: "2024-04-03",
      image:"https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=900"
    },
    {
      id: 3,
      user: "Charlie",
      rating: 5.0,
      comment: "Amazing service! The food arrived hot and fresh. Will definitely order again. I tried their pasta dish, and it was divine. The sauce was rich and creamy, and the pasta was cooked to perfection.",
      date: "2024-04-05",
      image:"https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=900"
    },
    {
      id: 4,
      user: "Diana",
      rating: 2.5,
      comment: "The food quality was not up to the mark. Disappointed with the taste. I ordered sushi, and it tasted a bit off. The rice was too dry, and the fish didn't seem very fresh.",
      date: "2024-04-07",
      image: "https://img.freepik.com/free-photo/interested-woman-with-wavy-hair-taking-selfie_197531-16717.jpg?w=900"
    },
    {
      id: 5,
      user: "Eva",
      rating: 4.0,
      comment: "Great variety of options on the menu. Prompt delivery too! I tried their salads, and they were so refreshing. The ingredients were crisp and the dressings were flavorful.",
      date: "2024-04-09",
      image:"https://img.freepik.com/free-photo/indoor-shot-pretty-girl-with-clean-skin-perfect-smile-having-fun-coffee-shop_273609-9039.jpg?w=900"
    },
    {
      id: 6,
      user: "Frank",
      rating: 4.2,
      comment: "I was pleasantly surprised by the quality of the food and service. I ordered a steak and it was cooked to perfection, just the way I like it. The delivery was also very prompt.",
      date: "2024-04-10",
      image:"https://img.freepik.com/free-photo/smiley-father-posing-with-arms-crossed_23-2148414862.jpg?w=900"
    },
    {
      id: 7,
      user: "Gina",
      rating: 3.8,
      comment: "Overall, a decent experience. The food arrived on time and was warm. However, the portion sizes were smaller than expected. I ordered a sandwich and it was tasty, but I wish there was more filling.",
      date: "2024-04-12",
      image:"https://img.freepik.com/free-photo/young-determined-armenian-curlyhaired-female-university-student-listen-carefully-asignment-look-confident-ready-task-cross-hands-chest-smiling-selfassured-standing-white-background_176420-56066.jpg?w=900"
    },

    {
      id: 8,
      user: "Henry",
      rating: 4.7,
      comment: "I'm impressed by the customer service. There was an issue with my order, but it was quickly resolved by the support team. The food itself was fantastic. I ordered their seafood platter and it was fresh and flavorful.",
      date: "2024-04-14",
      image:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900"
    },
    {
      id: 9,
      user: "Ivy",
      rating: 3.5,
      comment: "The food was average. I ordered a pizza and it was a bit greasy. The delivery was on time though. Not sure if I'll order again.",
      date: "2024-04-16",
      image:"https://img.freepik.com/free-photo/outdoor-portrait-pretty-blond-woman-wearing-orange-glasses-with-backpack_291650-490.jpg?w=900"
    },
    {
      id: 10,
      user: "Jack",
      rating: 4.9,
      comment: "Absolutely loved it! The food was exceptional, especially the desserts. I ordered their chocolate cake and it was heavenly. The delivery was also very smooth.",
      date: "2024-04-18",
      image:"https://img.freepik.com/free-photo/portrait-happy-smiley-man_23-2149022624.jpg?w=900"
    }
  ];
  
  const [rating, setRating] = useState(1);
  const [text, setText] = useState('');
  const [review, setReview] =  useState(reviews);
  const [isMenu, setMenu] = useState(false);
  function handleReview() {
    const date = new Date();
    const year = date.getFullYear();
    let month;
    let day;
    if (date.getMonth() + 1 < 10) {
      month = "0" + (date.getMonth() + 1);
    } else {
      month = date.getMonth() + 1;
    }
    if (date.getDate() < 10) {
      day = "0" + date.getDate();
    } else {
      day = date.getDate();
    }
    
    const newReview = {
      id: review[review.length - 1].id + 1,
      user: "You",
      comment: text,
      rating: rating,
      date: `${year}-${month}-${day}`,
      image: "https://img.freepik.com/free-photo/user-profile-interface-sign-symbol-icon-3d-rendering_56104-1956.jpg?w=900",
    };
    const updatedReviews = [...review];
    updatedReviews.unshift(newReview);
    setReview(updatedReviews);
    setText("");
    setRating(1);
    console.log(newReview);
  }


  function handleSorting(){
    if(isMenu){
      setMenu(false);
    }else{
      setMenu(!isMenu);
    }
  }
  function handleTopReviews() {
    const sortedReviews = [...reviews].sort((a, b) => a.id - b.id);
    setReview(sortedReviews);
  }
  
  function handleMostRecent() {
    const sortedReviews = [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
    setReview(sortedReviews);
  }
  function handleHighToLow() {
    const sortedReviews = [...reviews].sort((a,b) => b.rating - a.rating);
    setReview(sortedReviews);
  }

  function handleLowToHigh() {
    const sortedReviews = [...reviews].sort((a,b) => a.rating - b.rating);
    setReview(sortedReviews);
  }
  
  return (
    <div>
        <div><Navbar/></div>
        <div className='reviews'>
          <div>
          <h1 className='reviews-heading'>Reviews</h1>
          </div>
          <div className='rating'>
            <span >Rating:<span className='rating-no'>{rating}</span><FaStar color='#ffff00' /></span>
            <br/> <input type='range' min={1} max={5} step={.1} value={rating} onChange={(e)=> setRating(e.target.value)} className="slider"/>
          </div>
            <div className='write-review'>
            <MdReviews style={{width:"50px", height:"auto", color:"#fa4a0c"}} /> <textarea value={text} placeholder="Write Review" rows={8} cols={64} id="review" onChange={(e)=>setText(e.target.value)}/><button className="add-review" onClick={handleReview}>Add</button><br/>
            </div>
            <div className='cards-container'>
              <div style={{alignSelf:"end"}} onClick={handleSorting}><CiMenuKebab color='#fff' style={{height:"25px", width:"auto"}} /></div>
              <div className={isMenu ? 'sort-reviews' : 'remove-sort'}>
              <div style={{alignSelf:"end", backgroundColor:"#fff", width:"150px", padding:"2px 4px", margin:"4px 0", borderRadius:"5px", border:"1px solid #ccc", cursor:"pointer"}} onClick={handleTopReviews}><p>Top reviews</p></div>
              <div style={{alignSelf:"end", backgroundColor:"#fff", width:"150px", padding:"2px 4px", margin:"4px 0", borderRadius:"5px", border:"1px solid #ccc", cursor:"pointer"}} onClick={handleMostRecent}><p>Most recent</p></div>
              <div style={{alignSelf:"end", backgroundColor:"#fff", width:"150px", padding:"2px 4px", margin:"4px 0", borderRadius:"5px", border:"1px solid #ccc", cursor:"pointer"}} onClick={handleHighToLow}><p>Rating high to low</p></div>
              <div style={{alignSelf:"end", backgroundColor:"#fff", width:"150px", padding:"2px 4px", margin:"4px 0", borderRadius:"5px", border:"1px solid #ccc", cursor:"pointer"}} onClick={handleLowToHigh}><p>Rating low to high</p></div>
              </div>
              {review.map((item) => (
                <ReviewCards key={item.id} review={item} />
              ))}
            </div>
        </div>
        <div><Footer/></div>
    </div>
  )
}

export default Faq