import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { IoSearch } from "react-icons/io5";
import FoodItems from "./FoodItems";
import ReactSimplyCarousel from "react-simply-carousel";
import "./Home.css";
import FoodCard from "./FoodCard";
import Footer from "./Footer";
import { GrSort } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import Alert from '@mui/material/Alert';



function Home() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [numberOfDivs, setNumbersOfDivs] = useState(12);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isOption, setOption] = useState(false);
  const [sortBy, setSortBy] = useState('Most Relevant');
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);
  const categories = [
    {
      name: "Italian",
      image:
        "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=996",
    },
    {
      name: "Burgers",
      image:
        "https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?w=996",
    },
    {
      name: "Asian",
      image:
        "https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773780.jpg?w=900",
    },
    {
      name: "Mexican",
      image:
        "https://img.freepik.com/free-photo/mexican-food-composition_23-2147740702.jpg?w=826",
    },
    {
      name: "Salads",
      image:
        "https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-sesame-seeds_23-2148700369.jpg?w=900",
    },
    {
      name: "Seafood",
      image:
        "https://img.freepik.com/free-photo/top-view-fresh-fish-with-lemon-slices-wooden-table-food-seafood-dish-ocean_140725-91008.jpg?w=900",
    },
    {
      name: "Desserts",
      image:
        "https://img.freepik.com/free-photo/dessert-bowl-with-fresh-fruit-chocolate-indulgence-generative-ai_188544-8542.jpg?w=996",
    },
    {
      name: "Appetizers",
      image:
        "https://img.freepik.com/free-photo/cheese-platter-with-cheese-variations-crackers-nuts-strawberry-jam_114579-1942.jpg?w=826",
    },
    {
      name: "Indian",
      image:
        "https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=900",
    },
    {
      name: "Drinks",
      image:
        "https://img.freepik.com/free-photo/fresh-cocktails-wooden-table-with-leafs-generative-ai_188544-12374.jpg?w=996",
    },
  ];

  const menu = [
    {
      name: "Pizza",
      price: "250",
      rating: 4.5,
      image:
        "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=900",
      category: "Italian",
    },
    {
      name: "Burger",
      price: "150",
      rating: 4.2,
      image:
        "https://img.freepik.com/free-photo/beef-burgers-with-ingredients_141793-16643.jpg?w=900",
      category: "Burgers",
    },
    {
      name: "Pasta",
      price: "300",
      rating: 4.7,
      image:
        "https://img.freepik.com/free-photo/pasta-bake-with-penne-tomatoes-mozarella_661915-128.jpg?w=900",
      category: "Italian",
    },
    {
      name: "Sushi",
      price: "350",
      rating: 4.8,
      image:
        "https://img.freepik.com/free-photo/side-view-mix-sushi-rolls-tray-with-ginger-wasabi_141793-14242.jpg?w=900",
      category: "Asian",
    },
    {
      name: "Tacos",
      price: "200",
      rating: 4.6,
      image:
        "https://img.freepik.com/free-photo/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14218.jpg?w=900",
      category: "Mexican",
    },
    {
      name: "Caesar Salad",
      price: "180",
      rating: 4.3,
      image:
        "https://img.freepik.com/free-photo/side-view-caesar-salad-with-chicken-parmesan-cheese-white-bowl-wooden-board_140725-11875.jpg?w=740",
      category: "Salads",
    },
    {
      name: "Fish and Chips",
      price: "320",
      rating: 4.1,
      image:
        "https://img.freepik.com/free-photo/delicious-fish-fillet-with-french-fries_144627-24527.jpg?w=900",
      category: "Seafood",
    },
    {
      name: "Sushi Roll",
      price: "350",
      rating: 4.6,
      image:
        "https://img.freepik.com/free-photo/flat-lay-asian-food-box_23-2148771240.jpg?w=900",
      category: "Asian",
    },
    {
      name: "Chicken Wings",
      price: "280",
      rating: 4.3,
      image:
        "https://img.freepik.com/free-photo/high-angle-plate-with-fried-chicken-salad-with-sauce-cutlery_23-2148646615.jpg?w=900",
      category: "Appetizers",
    },
    {
      name: "Vegetable Curry",
      price: "220",
      rating: 4.5,
      image:
        "https://img.freepik.com/free-photo/high-angle-composition-with-delicious-pakistan-meal_23-2148821540.jpg?w=900",
      category: "Indian",
    },
    {
      name: "Tiramisu",
      price: "180",
      rating: 4.7,
      image:
        "https://img.freepik.com/free-photo/tiramisu-slice-wooden-platter_114579-18483.jpg?w=900",
      category: "Desserts",
    },
    {
      name: "Grilled Salmon",
      price: "420",
      rating: 4.8,
      image:
        "https://img.freepik.com/free-photo/front-view-tasty-cooked-fish-with-fresh-vegetables-seasonings-dark-background-color-food-meat-seafood-dish-photo_140725-139099.jpg?w=900",
      category: "Seafood",
    },
    {
      name: "Margarita",
      price: "200",
      rating: 4.4,
      image:
        "https://img.freepik.com/free-photo/alcohol-green-cocktail-lemon-citrus-fruit_188544-12411.jpg?w=996",
      category: "Drinks",
    },
    {
      name: "Cheese Platter",
      price: "320",
      rating: 4.5,
      image:
        "https://img.freepik.com/free-photo/cheese-platter-with-nuts-galetta_114579-2454.jpg?w=826",
      category: "Appetizers",
    },
    {
      name: "Tandoori Chicken",
      price: "300",
      rating: 4.9,
      image:
        "https://img.freepik.com/free-photo/top-view-spicy-chicken-with-lettuce-lemon-pan-table_181624-61795.jpg?w=900",
      category: "Indian",
    },
    {
      name: "Cheeseburger",
      price: "200",
      rating: 4.2,
      image:
        "https://img.freepik.com/free-photo/front-view-meat-burger-with-cheese-salad-tomatoes-dark-floor_140725-89524.jpg?w=900",
      category: "Burgers",
    },
    {
      name: "Chocolate Cake",
      price: "250",
      rating: 4.6,
      image:
        "https://img.freepik.com/free-photo/front-view-delicious-chocolate-cake-concept_23-2148746722.jpg?w=900",
      category: "Desserts",
    },
    {
      name: "Pad Thai",
      price: "280",
      rating: 4.7,
      image:
        "https://img.freepik.com/free-photo/asian-dish-plate-with-chopsticks-vegetables_23-2148694376.jpg?w=900",
      category: "Asian",
    },
    {
      name: "Nachos",
      price: "220",
      rating: 4.4,
      image:
        "https://img.freepik.com/free-photo/nachos-still-life_23-2148131374.jpg?w=900",
      category: "Appetizers",
    },
    {
      name: "Butter Chicken",
      price: "320",
      rating: 4.8,
      image:
        "https://img.freepik.com/free-photo/high-angle-chicken-meal_23-2148825122.jpg?w=900",
      category: "Indian",
    },
    {
      name: "Cheesecake",
      price: "200",
      rating: 4.6,
      image:
        "https://img.freepik.com/free-photo/closeup-shot-cheese-cake-slice-with-cake-with-berries-top_181624-12125.jpg?w=900",
      category: "Desserts",
    },
    {
      name: "Shrimp Scampi",
      price: "380",
      rating: 4.9,
      image:
        "https://img.freepik.com/free-photo/white-shrimp-salad-with-lettuce-corn-scallions_1150-26938.jpg?w=900",
      category: "Seafood",
    },
    {
      name: "Iced Tea",
      price: "120",
      rating: 4.2,
      image:
        "https://img.freepik.com/free-photo/beautiful-cold-drink-cola-with-ice-cubes_1150-26265.jpg?w=900",
      category: "Drinks",
    },
    {
      name: "Chicken Quesadilla",
      price: "240",
      rating: 4.5,
      image:
        "https://img.freepik.com/free-photo/turkish-pizza-lahmajun-with-cheese-served-with-parsley-lemon_140725-5962.jpg?w=900",
      category: "Appetizers",
    },
    {
      name: "Paneer Tikka",
      price: "280",
      rating: 4.7,
      image:
        "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg?w=900",
      category: "Indian",
    },
    {
      name: "Fish Taco",
      price: "300",
      rating: 4.3,
      image:
        "https://img.freepik.com/free-photo/creative-assortment-tasty-food_23-2148949073.jpg?w=900",
      category: "Seafood",
    },
    {
      name: "Mojito",
      price: "180",
      rating: 4.4,
      image:
        "https://img.freepik.com/free-photo/front-view-blue-cool-lemonade-with-ice-blue-background-fruit-water-cold-cocktail-drink-color-juice_140725-156776.jpg?w=900",
      category: "Drinks",
    },
    {
      name: "Pepperoni Pizza",
      price: "250",
      rating: 4.5,
      image: "https://img.freepik.com/free-photo/tasty-homemade-pizza-wooden-board-oil-bottle-tomatoes-pepper-dark-surface_179666-34093.jpg?t=st=1712920073~exp=1712923673~hmac=ce1860ed051b9eb0cdae6227f58e9fc78320e0b852a837babac3af91c28353c3&w=900",
      category: "Italian",
    },
    {
      name: "Chocolate Ice Cream",
      price: "150",
      rating: 4.2,
      image: "https://img.freepik.com/free-photo/still-life-cookies-ice-cream_23-2149637129.jpg?t=st=1712920357~exp=1712923957~hmac=34597ca5cba033d4c11c99e9c1744ba66e0224ac2e5db7d81d0354db5b83b66c&w=900",
      category: "Desserts",
    },
    {
      name: "Espresso",
      price: "100",
      rating: 4.8,
      image: "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?t=st=1712920794~exp=1712924394~hmac=7d0fe9c439edecfc78bf0014642fef4809598d6541e9d616d8ae130bb3ee7a4c&w=740",
      category: "Drinks",
    },
    {
      name: "Vanilla Milkshake",
      price: "180",
      rating: 4.6,
      image: "https://img.freepik.com/free-photo/close-up-aromatic-beverage-with-spices_23-2148349610.jpg?t=st=1712920872~exp=1712924472~hmac=7693dbafa9d7b2d81b3c51aea3d10ac0f4dea338d354255418fec1ea1d375a20&w=900",
      category: "Drinks",
    },
    {
      name: "Margherita Pizza",
      price: "200",
      rating: 4.4,
      image: "https://img.freepik.com/free-photo/delicious-pizza-with-mushrooms-close-up_23-2148516973.jpg?t=st=1712920961~exp=1712924561~hmac=5a2e79a6cb3f500f862a68340978420da677aefa3a14d1c79cb221787195f4cb&w=900",
      category: "Italian",
    },
    {
      name: "Strawberry Ice Cream",
      price: "160",
      rating: 4.3,
      image: "https://img.freepik.com/free-photo/top-view-delicious-pink-ice-cream-still-life_23-2150096621.jpg?t=st=1712921031~exp=1712924631~hmac=a92465e5c8b1011e3614b5e7867155a07ba7fd4bf48d7b035ab355129ffaec05&w=900",
      category: "Desserts",
    },
    {
      name: "Cappuccino",
      price: "120",
      rating: 4.7,
      image: "https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?t=st=1712921086~exp=1712924686~hmac=c601189d9e8d3d39f6daff6a1ef32adc721c596249327861fd264e82e72e5a5e&w=826",
      category: "Drinks",
    },
    {
      name: "Chocolate Milkshake",
      price: "180",
      rating: 4.5,
      image: "https://img.freepik.com/free-photo/iced-chocolate_1339-4415.jpg?t=st=1712921163~exp=1712924763~hmac=effd2a7f216a0c6f1b6970ae4567eb293e87e77cc2911b0ac12ae35e9f4da746&w=826",
      category: "Drinks",
    },
    {
      name: "Vegetarian Pizza",
      price: "220",
      rating: 4.4,
      image: "https://img.freepik.com/free-photo/top-view-tasty-mushroom-pizza-with-red-tomatoes-bell-peppers-olives-mushrooms-all-sliced-inside-grey-desk-food-meal-pizza-italian_140725-23181.jpg?t=st=1712921265~exp=1712924865~hmac=ee0ad0d5e41d98237eb555698060913515d7c13ea3d8a57c79d6ed12fcd594bf&w=900",
      category: "Italian",
    },
    {
      name: "Vanilla Ice Cream",
      price: "150",
      rating: 4.2,
      image: "https://img.freepik.com/free-photo/ice-cream-scoops-served-bowl_1220-7252.jpg?t=st=1712921478~exp=1712925078~hmac=ef2409f2e2bfbd107c6b1fc147da64bde980a0d0c982066baffeff94130622be&w=900",
      category: "Desserts",
    },
    {
      name: "Burrito Bowl",
      price: "200",
      rating: 4.7,
      image: "https://img.freepik.com/free-photo/flat-lay-assortment-with-traditional-mexican-food_23-2148329169.jpg?t=st=1712921979~exp=1712925579~hmac=01659099a2c74dc7c1409b55afa4aa1c209fc7a8f96d7ef05849e0edc46c6e43&w=740",
      category: "Mexican",
    },
    {
      name: "Guacamole",
      price: "120",
      rating: 4.5,
      image: "https://img.freepik.com/free-photo/guacamole-dip_144627-26998.jpg?t=st=1712922156~exp=1712925756~hmac=2eda3995aef2e1190354c7cef34cfb739003483e886f364ffe11b36f04f67fca&w=900",
      category: "Mexican",
    },
    {
      name: "Cobb Salad",
      price: "190",
      rating: 4.3,
      image: "https://img.freepik.com/free-photo/front-view-vegetable-salad-with-cheese-dark-blue-surface-meal-color-health-lunch-cuisine-fresh-diet-restaurant-food_179666-19641.jpg?t=st=1712922246~exp=1712925846~hmac=07bfac0099331ea7bc0a71818a8524dab77d765688304d0bbf53f46fda730bc1&w=900",
      category: "Salads",
    },
    {
      name: "Greek Salad",
      price: "180",
      rating: 4.4,
      image: "https://img.freepik.com/free-photo/dietary-salad-with-tomatoes-feta-lettuce-spinach-pine-nuts_2829-20133.jpg?t=st=1712922323~exp=1712925923~hmac=9b5dd16fb8f4eb9a23e4a91edea6327998221773d4e68e01bbffa1113301ae07&w=900",
      category: "Salads",
    },
    {
      name: "Taco Al Pastor",
      price: "180",
      rating: 4.6,
      image: "https://img.freepik.com/free-photo/mexican-food-concept-high-angle_23-2148629376.jpg?t=st=1712922495~exp=1712926095~hmac=79c8ed9d9a56e79e11ad1c3928d616299bed5739eb581c45c2ccd750b49670c1&w=900",
      category: "Mexican",
    },
  ];
  const [quantities, setQuantities] = useState(new Array(menu.length).fill(1));

  const handleFilter = (e) => {
    const input = e.target.value.toLowerCase();
    setQuery(input);
    if (!input) {
      setFilteredMenu([]);
    } else {
      const filteredByText = menu.filter(
        (item) =>
          item.name.toLowerCase().includes(input) ||
          item.category.toLowerCase().includes(input)
      );
      setFilteredMenu(filteredByText);
    }
  };

  const filterByCategory = (categoryName) => {
    setQuery("");
    const filteredByCategory = menu.filter(
      (item) => item.category === categoryName
    );
    setFilteredMenu(filteredByCategory);
  };

  const handleAddToCart = (itemIndex) => {
    setAlert(true);
    setTimeout(()=>{
      setAlert(false);
    },5000)
    const newItem = {
      name: menu[itemIndex].name,
      image: menu[itemIndex].image,
      price: menu[itemIndex].price,
      quantity: quantities[itemIndex],
    };

    setCart((prevCart) => [...prevCart, newItem]);
    console.log(cart);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const handleAddQuantity = (index) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      updatedQuantities[index]++;
      return updatedQuantities;
    });
  };

  const handleMinusQuantity = (index) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      if (updatedQuantities[index] > 1) {
        updatedQuantities[index]--;
      }
      return updatedQuantities;
    });
  };

  function getMoreDivs() {
    setNumbersOfDivs(menu.length);
    setButtonClicked(true);
  }

  function handlePriceHigh(){
    setSortBy('Price High To Low');
    const setSortedMenu = ([...menu].sort((a, b) => parseFloat(b.price) - parseFloat(a.price)));
    return setFilteredMenu(setSortedMenu);
  }
  function handlePriceLow(){
    setSortBy('Price Low To High');
    const setSortedMenu = ([...menu].sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));
    return setFilteredMenu(setSortedMenu);
  }
  function handleRatingHigh(){
    setSortBy('Rating High To Low')
    const setSortedMenu = ([...menu].sort((a, b) => b.rating - a.rating));
    return setFilteredMenu(setSortedMenu);
  }
  function handleRatingLow(){
    setSortBy('Rating Low To High');
    const setSortedMenu = ([...menu].sort((a, b) => a.rating - b.rating));
    return setFilteredMenu(setSortedMenu);

  }
  function handleMostRelavant(){
    setSortBy('Most Relevant');
    const setSortedMenu = ([...menu]);
    return setFilteredMenu(setSortedMenu);
  }
  function handleDropDown(){
    if(isOption){
      setOption(false);
    }else{
      setOption(!isOption);
    }
  }





  return (
    <div>
      <Navbar />
      <div className="home">
        <div className={alert? 'show-alert':'hide-alert'}>    <Alert severity="success">Item Added Sucessfully.</Alert>
</div>
        <div className="poster">
          <div>
            <h1>Are You Starving?</h1>
            <p>Within a few clicks, find meals that are accessible near you</p>
            <a href="#menu">
              <button>View Menu</button>
            </a>
          </div>
          <div className="poster-image">
            <video loop autoPlay>
              <source
                src="https://cdn.dribbble.com/users/319371/screenshots/11984807/media/05cad6c3ffff65f9142bf2958b941171.mp4"
                type="video/mp4"
              />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="home-heading">
          <h1>What would you like to order</h1>
        </div>
        <div className="search">
          <IoSearch />
          <input
            type="text"
            placeholder="Find for Food"
            value={query}
            onChange={handleFilter}
          />
        </div>
        <div className="food-items">
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
                itemsToShow: 6,
                itemsToScroll: 2,
                minWidth: 768,
              },
            ]}
            speed={300}
            easing="linear"
          >
            {categories.map((item, index) => (
              <FoodItems
                key={index}
                item={item}
                onClick={() => filterByCategory(item.name)}
              />
            ))}
          </ReactSimplyCarousel>
        </div>
        <div className="food-card" id="menu">
          <div className="popular-food">
            <h2>Popular Foods</h2>
            <div className="drop-down">
              <div className="sort-by" onClick={handleDropDown} ><GrSort /> {sortBy} <RiArrowDropDownLine /></div>
              <div className={isOption ? 'sort-menu' : 'remove-menu'}>
              <div style={{alignSelf:"end", backgroundColor:"#fff", width:"150px", padding:"2px 4px", margin:"4px 0", borderRadius:"5px", border:"1px solid #ccc", cursor:"pointer"}} onClick={handleMostRelavant} ><p>Most Relavant</p></div>
              <div style={{alignSelf:"end", backgroundColor:"#fff", width:"150px", padding:"2px 4px", margin:"4px 0", borderRadius:"5px", border:"1px solid #ccc", cursor:"pointer"}} onClick={handlePriceLow} ><p>Price Low To High</p></div>
              <div style={{alignSelf:"end", backgroundColor:"#fff", width:"150px", padding:"2px 4px", margin:"4px 0", borderRadius:"5px", border:"1px solid #ccc", cursor:"pointer"}} onClick={handlePriceHigh} ><p>Price High To Low</p></div>
              <div style={{alignSelf:"end", backgroundColor:"#fff", width:"150px", padding:"2px 4px", margin:"4px 0", borderRadius:"5px", border:"1px solid #ccc", cursor:"pointer"}} onClick={handleRatingHigh} ><p>Rating High To Low</p></div>
              <div style={{alignSelf:"end", backgroundColor:"#fff", width:"150px", padding:"2px 4px", margin:"4px 0", borderRadius:"5px", border:"1px solid #ccc", cursor:"pointer"}} onClick={handleRatingLow} ><p>Rating Low To Ligh</p></div>
              </div>
              </div>
              </div>
  
          
          <div className="menu">
            {(filteredMenu.length > 0 ? filteredMenu : menu)
              .slice(0, numberOfDivs)
              .map((item, index) => (
                <FoodCard
                  food={item}
                  quantity={quantities[index]}
                  onAddToCart={() => handleAddToCart(index)}
                  onAddQuantity={() => handleAddQuantity(index)}
                  onMinusQuantity={() => handleMinusQuantity(index)}
                  key={index}
                />
              ))}
          </div>
          <div className={!buttonClicked ? "view-more-div" : "hide-div"}>
            <button onClick={getMoreDivs} className="view-more-button">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
