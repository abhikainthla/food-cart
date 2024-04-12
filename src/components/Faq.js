import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { MdReviews } from "react-icons/md";
import { GrSort } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import ReactSimplyCarousel from "react-simply-carousel";
import './Faq.css'
import './Footer.css'
import ReviewCards from './ReviewCards';
import FaqCards from './FaqCards';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import ReviewPics from './ReviewPics';
function Faq() {
  const labels = {
    0.5: 'Po0r',
    1: 'Bad',
    1.5: 'Not Happy',
    2: 'Ok',
    2.5: 'Average',
    3: 'Neutral',
    3.5: 'Good',
    4: 'Very Good',
    4.5: 'Excellent',
    5: 'Loved It',
  };
  

  const images = [
    {
      image: "https://img.freepik.com/free-photo/indian-delicious-food-view_23-2148723502.jpg?t=st=1712932734~exp=1712936334~hmac=a73cd09bb2f42546f9a1920d0a7de5c3d1e2b87a3c166a659ec70442622b6f38&w=740"
    },
    {
      image: "https://img.freepik.com/free-photo/couple-enjoying-food-restaurant_23-2149269156.jpg?t=st=1712932832~exp=1712936432~hmac=d948ebc16dfb5b5a1069166ff4100c19954feee06ea976532c6011157ff00150&w=826"
    },
    {
      image: "https://img.freepik.com/free-photo/pizza-with-ham-mushrooms-olives_2829-7211.jpg?t=st=1712932928~exp=1712936528~hmac=c5028c44a029b12be696af0376d41e247be297e1e62e7d1b83c6f5a1d75a5324&w=826"
    },
    {
      image: "https://img.freepik.com/free-photo/korean-instant-noodle-tteokbokki-korean-spicy-sauce-ancient-food_1150-43006.jpg?t=st=1712933100~exp=1712936700~hmac=5c91f65e6970bc2eb1eed3279437c350bde6c080da7665994027ef3e510658d3&w=826"
    },
    {
      image: "https://img.freepik.com/free-photo/pasta-with-tomato-sauce-served-bowl_1220-7550.jpg?t=st=1712933288~exp=1712936888~hmac=1f605616f7a8368289540d1d6033f911ff7d36fa2dd3591c74a91753d08045c5&w=826"
    },
    {
      image: "https://img.freepik.com/free-photo/baked-salmon-fish-fillet-with-tomatoes-mushrooms-spices-diet-menu_2829-14461.jpg?t=st=1712933413~exp=1712937013~hmac=c1b8876cc7af9f6d145263982fcfd9c05d3d9e8df8c7e51df55612ddb53207a4&w=826"
    },
    {
      image: "https://img.freepik.com/free-photo/side-view-chicken-kebab-with-red-onion-greens-dried-barberry-pita_141793-4838.jpg?t=st=1712933511~exp=1712937111~hmac=80dffb3cfa7658c4edcf9e45d91b84fcbb699aee6aebfb8d49942ffb9b77b5a8&w=826"
    },
    {
      image: "https://img.freepik.com/free-photo/side-view-chicken-skewers-grilled-chicken-fillet-with-red-yellow-peppers-seasoning-sauce-sesame-seeds-plate_141793-4853.jpg?t=st=1712933605~exp=1712937205~hmac=98c4b63aa3115f4c73896dd6280868e644927305a6ab8208d86f17d17a7ff985&w=826"
    },
    {
      image: "https://img.freepik.com/free-photo/close-up-person-holding-plate-with-tacos_23-2148329171.jpg?t=st=1712933744~exp=1712937344~hmac=5f0fb621202c3ac42198b92ee94830ed6e2279b536340d77c7578416368d2b6e&w=740"
    },
    {
      image: "https://img.freepik.com/free-photo/classic-cheesecake-with-strawberry-cherry-slices_140725-3241.jpg?t=st=1712933893~exp=1712937493~hmac=f62a057c2667e87056f6e12f1fbb8d7de2f6eb5e37a871fd4d43e51ca6dcfcf7&w=740"
    }
  ];
  

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
    },
    {
      id: 11,
      user: "Apurva",
      rating: 5,
      comment: "Excellent service! The food arrived hot and on time. Definitely ordering again.",
      date: "2024-04-01",
      image: "https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-66741.jpg?t=st=1712917124~exp=1712920724~hmac=bd26f874cc0babfd494675d5d8606bf830c8a758097447b3c92b999627b0663f&w=900"

  },
  {
      id: 12,
      user: "Smith",
      rating: 4,
      comment: "Great variety of restaurants to choose from. The app is user-friendly and makes ordering food a breeze.",
      date: "2024-03-28",
      image: "https://img.freepik.com/free-photo/medium-shot-smiley-man-posing_23-2148920610.jpg?t=st=1712917175~exp=1712920775~hmac=9e289099ce4e414d1dde0b17a907aa16955f15f41ccd769cfd81c9aa95deca92&w=826"
  },
  {
      id: 13,
      user: "Alia",
      rating: 3,
      comment: "Decent service. However, the delivery was a bit late this time.",
      date: "2024-03-20",
      image: "https://img.freepik.com/free-photo/fashion-girl-walking-summer-city_1157-20297.jpg?t=st=1712917043~exp=1712920643~hmac=234da79983b02937042b797c89fbdcbda37ca34c4657bb4ba7eac276f1ee785f&w=900"
  },
  {
      id: 14,
      user: "Emily",
      rating: 5,
      comment: "Impressed with the customer support. They promptly resolved an issue I had with my order. Will continue using this app.",
      date: "2024-03-15",
      image: "https://img.freepik.com/free-photo/charming-black-haired-woman-with-happy-face-expression-posing-with-peace-sign-street_197531-6356.jpg?t=st=1712916851~exp=1712920451~hmac=3cb0addc2ef30df6f9d89a22cbf3cbcbb3968afb7ae8cf2782bb5201b3be7c16&w=900"
  }
  ];
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "To place an order, simply open the app, browse through the menu, select the items you'd like to order, and proceed to checkout. Follow the prompts to provide delivery details and complete your order."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, digital wallets (such as Apple Pay, Google Pay), and cash on delivery (where available). You can choose your preferred payment method during checkout."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is confirmed, you'll receive a confirmation message with an estimated delivery time. You can track the status of your order in real-time through the app. Additionally, you'll receive notifications at each stage of the delivery process."
    },
    {
      question: "Can I customize my order?",
      answer: "Yes, you can customize your order according to your preferences. Our app allows you to add special instructions or make modifications to your items before placing the order. Simply specify your requirements in the order notes section during checkout."
    },
    {
      question: "What if I have food allergies or dietary restrictions?",
      answer: "We take food allergies and dietary restrictions seriously. Our menu includes options for various dietary preferences such as vegetarian, vegan, gluten-free, etc. You can filter the menu based on your dietary requirements or reach out to our customer support team for assistance in selecting suitable options."
    },
    {
      question: "Is there a minimum order requirement for delivery?",
      answer: "The minimum order requirement for delivery may vary depending on your location and the restaurant you're ordering from. You can check the minimum order amount for each restaurant listed in the app before placing your order."
    },
    {
      question: "What if I need to cancel my order?",
      answer: "If you need to cancel your order, please do so as soon as possible before it is prepared for delivery. You can cancel the order directly from the app by navigating to your order history and selecting the cancel option. Please note that orders already in preparation cannot be canceled."
    },
    {
      question: "How do I provide feedback or report an issue with my order?",
      answer: "Your feedback is important to us! If you have any issues with your order or if you'd like to provide feedback, you can contact our customer support team through the app. We're here to assist you and ensure your experience is satisfactory."
    },
    {
      question: "Do you offer contactless delivery?",
      answer: "Yes, we offer contactless delivery options to ensure the safety of our customers and delivery partners. You can request contactless delivery during checkout, and our delivery partners will leave your order at your doorstep without direct contact."
    },
  ];
  
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [value, setValue] = useState(2.5);
  const [hover, setHover] = useState(-1)
  const [text, setText] = useState('');
  const [review, setReview] =  useState(reviews);
  const [isMenu, setMenu] = useState(false);
  const [sortBy, setSortBy] = useState('Top Reviews');
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
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
      rating: value,
      date: `${year}-${month}-${day}`,
      image: "https://img.freepik.com/free-photo/user-profile-interface-sign-symbol-icon-3d-rendering_56104-1956.jpg?w=900",
    };
    const updatedReviews = [...review];
    updatedReviews.unshift(newReview);
    setReview(updatedReviews);
    setText("");
    setValue(1);
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
    setSortBy('Top Reviews');
  }
  
  function handleMostRecent() {
    const sortedReviews = [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
    setReview(sortedReviews);
    setSortBy('Most Recent');
  }
  function handleHighToLow() {
    const sortedReviews = [...reviews].sort((a,b) => b.rating - a.rating);
    setReview(sortedReviews);
    setSortBy('Rating High To Low')
  }

  function handleLowToHigh() {
    const sortedReviews = [...reviews].sort((a,b) => a.rating - b.rating);
    setReview(sortedReviews);
    setSortBy('Rating Low To High')
  }
  
  return (
    <div>
        <div><Navbar/></div>
        
        <div className='reviews'>
          <h2>Reviews</h2>
          <div>
          <h1 className='reviews-heading'>Reviews</h1>
          </div>
          <div className='rating'>
          <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
    </div>
            <div className='write-review'>
            <MdReviews style={{width:"50px", height:"auto", color:"#fa4a0c"}} /> <textarea value={text} placeholder="Write Review" id="review" onChange={(e)=>setText(e.target.value)}/><button className="add-review" onClick={handleReview}>Add</button><br/>
            </div>
            <div className='pic-reviews'>
              <h3>Images From Our Customers</h3>
            <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={1}
            itemsToScroll={1}
            forwardBtnProps={{
              style: {
                alignSelf: "center",
                background: "#ed272b",
                border: "none",
                borderRadius: "50%",
                color: "white",
                cursor: "pointer",
                fontSize: "20px",
                height: 30,
                lineHeight: 1,
                textAlign: "center",
                width: 30,
              },
              children: <span>{`>`}</span>,
            }}
            backwardBtnProps={{
              style: {
                alignSelf: "center",
                background: "#ed272b",
                border: "none",
                borderRadius: "50%",
                color: "white",
                cursor: "pointer",
                fontSize: "20px",
                height: 30,
                lineHeight: 1,
                textAlign: "center",
                width: 30,
              },
              children: <span>{`<`}</span>,
            }}
            responsiveProps={[
              {
                itemsToShow: 3,
                itemsToScroll: 2,
                minWidth: 768,
              },
            ]}
            speed={300}
            easing="linear"
          >
            {
              images.map((item, index)=>{
                return (<ReviewPics  key ={index} image={item.image}/>)
              })
            }
          </ReactSimplyCarousel>
            </div>
            <div className='sorting-divs'>
            <div className='cards-container'>
              <div style={{alignSelf:"end", backgroundColor:"#fff", padding:"8px 16px"}} onClick={handleSorting}><GrSort /> {sortBy} <RiArrowDropDownLine /></div>
              <div className={isMenu ? 'sort-reviews' : 'remove-sort'}>
              <div style={{alignSelf:"end", backgroundColor:"#fff", width:"150px", padding:"2px 4px", margin:"4px 0", borderRadius:"5px", border:"1px solid #ccc", cursor:"pointer"}} onClick={handleTopReviews}><p>Top reviews</p></div>
              <div style={{alignSelf:"end", backgroundColor:"#fff", width:"150px", padding:"2px 4px", margin:"4px 0", borderRadius:"5px", border:"1px solid #ccc", cursor:"pointer"}} onClick={handleMostRecent}><p>Most recent</p></div>
              <div style={{alignSelf:"end", backgroundColor:"#fff", width:"150px", padding:"2px 4px", margin:"4px 0", borderRadius:"5px", border:"1px solid #ccc", cursor:"pointer"}} onClick={handleHighToLow}><p>Rating high to low</p></div>
              <div style={{alignSelf:"end", backgroundColor:"#fff", width:"150px", padding:"2px 4px", margin:"4px 0", borderRadius:"5px", border:"1px solid #ccc", cursor:"pointer"}} onClick={handleLowToHigh}><p>Rating low to high</p></div>
              </div>
              </div>
              {review.map((item) => (
                <ReviewCards key={item.id} review={item} />
              ))}
            </div>
        </div>
        <div className='faqs'>
          <h2>FAQs</h2>
          {
            faqs.map((item, index)=>{
              return (
                <FaqCards key={index} question={item.question} answer={item.answer}/>
              )
            })
          }
        </div>
        <div><Footer/></div>
    </div>
  )
}

export default Faq