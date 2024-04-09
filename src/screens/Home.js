import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { IoSearch } from "react-icons/io5";
import FoodItems from "../components/FoodItems";
import ReactSimplyCarousel from 'react-simply-carousel';
import './Home.css';
import FoodCard from "../components/FoodCard";
import Footer from "../components/Footer";

function Home() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [query, setQuery] = useState('');
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [cart, setCart] = useState([]);


    const categories = [
        {
            name: "Italian",
            image: "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=996"
        },
        {
            name: "Burgers",
            image: "https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?w=996"
        },
        {
            name: "Asian",
            image: "https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773780.jpg?w=900"
        },
        {
            name: "Mexican",
            image: "https://img.freepik.com/free-photo/mexican-food-composition_23-2147740702.jpg?w=826"
        },
        {
            name: "Salads",
            image: "https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-sesame-seeds_23-2148700369.jpg?w=900"
        },
        {
            name: "Seafood",
            image: "https://img.freepik.com/free-photo/top-view-fresh-fish-with-lemon-slices-wooden-table-food-seafood-dish-ocean_140725-91008.jpg?w=900"
        },
        {
            name: "Desserts",
            image: "https://img.freepik.com/free-photo/dessert-bowl-with-fresh-fruit-chocolate-indulgence-generative-ai_188544-8542.jpg?w=996"
        },
        {
            name: "Appetizers",
            image: "https://img.freepik.com/free-photo/cheese-platter-with-cheese-variations-crackers-nuts-strawberry-jam_114579-1942.jpg?w=826"
        },
        {
            name: "Indian",
            image: "https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=900"
        },
        {
            name: "Drinks",
            image: "https://img.freepik.com/free-photo/fresh-cocktails-wooden-table-with-leafs-generative-ai_188544-12374.jpg?w=996"
        },
    ];
    

    const menu = [
        {
            name: "Pizza",
            price: "₹250",
            rating: 4.5,
            image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=900",
            category: "Italian",
        },
        {
            name: "Burger",
            price: "₹150",
            rating: 4.2,
            image: "https://img.freepik.com/free-photo/beef-burgers-with-ingredients_141793-16643.jpg?w=900",
            category: "Burgers",
        },
        {
            name: "Pasta",
            price: "₹300",
            rating: 4.7,
            image: "https://img.freepik.com/free-photo/pasta-bake-with-penne-tomatoes-mozarella_661915-128.jpg?w=900",
            category: "Italian",
        },
        {
            name: "Sushi",
            price: "₹350",
            rating: 4.8,
            image: "https://img.freepik.com/free-photo/side-view-mix-sushi-rolls-tray-with-ginger-wasabi_141793-14242.jpg?w=900",
            category: "Asian",
        },
        {
            name: "Tacos",
            price: "₹200",
            rating: 4.6,
            image: "https://img.freepik.com/free-photo/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14218.jpg?w=900",
            category: "Mexican",
        },
        {
            name: "Caesar Salad",
            price: "₹180",
            rating: 4.3,
            image: "https://img.freepik.com/free-photo/side-view-caesar-salad-with-chicken-parmesan-cheese-white-bowl-wooden-board_140725-11875.jpg?w=740",
            category: "Salads",
        },
        {
            name: "Fish and Chips",
            price: "₹320",
            rating: 4.1,
            image: "https://img.freepik.com/free-photo/delicious-fish-fillet-with-french-fries_144627-24527.jpg?w=900",
            category: "Seafood",
        },
        {
            name: "Sushi Roll",
            price: "₹350",
            rating: 4.6,
            image: "https://img.freepik.com/free-photo/flat-lay-asian-food-box_23-2148771240.jpg?w=900",
            category: "Asian",
          },
          {
            name: "Chicken Wings",
            price: "₹280",
            rating: 4.3,
            image: "https://img.freepik.com/free-photo/high-angle-plate-with-fried-chicken-salad-with-sauce-cutlery_23-2148646615.jpg?w=900",
            category: "Appetizers",
          },
          {
            name: "Vegetable Curry",
            price: "₹220",
            rating: 4.5,
            image: "https://img.freepik.com/free-photo/high-angle-composition-with-delicious-pakistan-meal_23-2148821540.jpg?w=900",
            category: "Indian",
          },
          {
            name: "Tiramisu",
            price: "₹180",
            rating: 4.7,
            image: "https://img.freepik.com/free-photo/tiramisu-slice-wooden-platter_114579-18483.jpg?w=900",
            category: "Desserts",
          },
          {
            name: "Grilled Salmon",
            price: "₹420",
            rating: 4.8,
            image: "https://img.freepik.com/free-photo/front-view-tasty-cooked-fish-with-fresh-vegetables-seasonings-dark-background-color-food-meat-seafood-dish-photo_140725-139099.jpg?w=900",
            category: "Seafood",
          },
          {
            name: "Margarita",
            price: "₹200",
            rating: 4.4,
            image: "https://img.freepik.com/free-photo/alcohol-green-cocktail-lemon-citrus-fruit_188544-12411.jpg?w=996",
            category: "Drinks",
          },
          {
            name: "Cheese Platter",
            price: "₹320",
            rating: 4.5,
            image: "https://img.freepik.com/free-photo/cheese-platter-with-nuts-galetta_114579-2454.jpg?w=826",
            category: "Appetizers",
          },
          {
            name: "Tandoori Chicken",
            price: "₹300",
            rating: 4.9,
            image: "https://img.freepik.com/free-photo/top-view-spicy-chicken-with-lettuce-lemon-pan-table_181624-61795.jpg?w=900",
            category: "Indian",
          },
          {
            name: "Cheeseburger",
            price: "₹200",
            rating: 4.2,
            image: "https://img.freepik.com/free-photo/front-view-meat-burger-with-cheese-salad-tomatoes-dark-floor_140725-89524.jpg?w=900",
            category: "Burgers",
          },
          {
            name: "Chocolate Cake",
            price: "₹250",
            rating: 4.6,
            image: "https://img.freepik.com/free-photo/front-view-delicious-chocolate-cake-concept_23-2148746722.jpg?w=900",
            category: "Desserts",
          },
          {
            name: "Pad Thai",
            price: "₹280",
            rating: 4.7,
            image: "https://img.freepik.com/free-photo/asian-dish-plate-with-chopsticks-vegetables_23-2148694376.jpg?w=900",
            category: "Asian",
          },
          {
            name: "Nachos",
            price: "₹220",
            rating: 4.4,
            image: "https://img.freepik.com/free-photo/nachos-still-life_23-2148131374.jpg?w=900",
            category: "Appetizers",
          },
          {
            name: "Butter Chicken",
            price: "₹320",
            rating: 4.8,
            image: "https://img.freepik.com/free-photo/high-angle-chicken-meal_23-2148825122.jpg?w=900",
            category: "Indian",
          },
          {
            name: "Cheesecake",
            price: "₹200",
            rating: 4.6,
            image: "https://img.freepik.com/free-photo/closeup-shot-cheese-cake-slice-with-cake-with-berries-top_181624-12125.jpg?w=900",
            category: "Desserts",
          },
          {
            name: "Shrimp Scampi",
            price: "₹380",
            rating: 4.9,
            image: "https://img.freepik.com/free-photo/white-shrimp-salad-with-lettuce-corn-scallions_1150-26938.jpg?w=900",
            category: "Seafood",
          },
          {
            name: "Iced Tea",
            price: "₹120",
            rating: 4.2,
            image: "https://img.freepik.com/free-photo/beautiful-cold-drink-cola-with-ice-cubes_1150-26265.jpg?w=900",
            category: "Drinks",
          },
          {
            name: "Chicken Quesadilla",
            price: "₹240",
            rating: 4.5,
            image: "https://img.freepik.com/free-photo/turkish-pizza-lahmajun-with-cheese-served-with-parsley-lemon_140725-5962.jpg?w=900",
            category: "Appetizers",
          },
          {
            name: "Paneer Tikka",
            price: "₹280",
            rating: 4.7,
            image: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg?w=900",
            category: "Indian",
          },
          {
            name: "Fish Taco",
            price: "₹300",
            rating: 4.3,
            image: "https://img.freepik.com/free-photo/creative-assortment-tasty-food_23-2148949073.jpg?w=900",
            category: "Seafood",
          },
          {
            name: "Mojito",
            price: "₹180",
            rating: 4.4,
            image: "https://img.freepik.com/free-photo/front-view-blue-cool-lemonade-with-ice-blue-background-fruit-water-cold-cocktail-drink-color-juice_140725-156776.jpg?w=900",
            category: "Drinks",
          }
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
      setQuery('');
      const filteredByCategory = menu.filter(
        (item) => item.category === categoryName
      );
      setFilteredMenu(filteredByCategory);
    };
  
    const handleAddToCart = (itemIndex) => {
      const newItem = {
        name: menu[itemIndex].name,
        image: menu[itemIndex].image,
        price: menu[itemIndex].price,
        quantity: quantities[itemIndex],
      };
  
      setCart((prevCart) => [...prevCart, newItem]);
    };
  
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
  console.log(cart);
  
  

  

  return (
      <div>
          <Navbar />
          <div className="home">
              <div className="home-heading">
                  <h1>What would you like to order</h1>
              </div>
              <div className="search">
                  <IoSearch />
                  <input type="text" placeholder="Find for Food" value={query} onChange={handleFilter} />
              </div>
              <div className="food-items">
                  <ReactSimplyCarousel
                      activeSlideIndex={activeSlideIndex}
                      onRequestChange={setActiveSlideIndex}
                      itemsToShow={1}
                      itemsToScroll={1}
                      forwardBtnProps={{
                          style: {
                              alignSelf: 'center',
                              background: '#ed272b',
                              border: 'none',
                              borderRadius: '50%',
                              color: 'white',
                              cursor: 'pointer',
                              fontSize: '20px',
                              height: 30,
                              lineHeight: 1,
                              textAlign: 'center',
                              width: 30,
                          },
                          children: <span>{`>`}</span>,
                      }}
                      backwardBtnProps={{
                          style: {
                              alignSelf: 'center',
                              background: '#ed272b',
                              border: 'none',
                              borderRadius: '50%',
                              color: 'white',
                              cursor: 'pointer',
                              fontSize: '20px',
                              height: 30,
                              lineHeight: 1,
                              textAlign: 'center',
                              width: 30,
                          },
                          children: <span>{`<`}</span>,
                      }}
                      responsiveProps={[
                          {
                              itemsToShow: 6,
                              itemsToScroll: 2,
                              minWidth: 800,
                          },
                      ]}
                      speed={400}
                      easing="linear"
                  >
                      {categories.map((item, index) => (
                          <FoodItems key={index} item={item} onClick={() => filterByCategory(item.name)} />
                      ))}
                  </ReactSimplyCarousel>
              </div>
              <div className="food-card">
                  <h2>Popular Foods</h2>
                  <div className="menu">
            {(filteredMenu.length > 0 ? filteredMenu : menu).map(
              (item, index) => (
                <FoodCard
                  food={item}
                  quantity={quantities[index]}
                  onAddToCart={() => handleAddToCart(index)}
                  onAddQuantity={() => handleAddQuantity(index)}
                  onMinusQuantity={() => handleMinusQuantity(index)}
                  key={index}
                />
              )
            )}
          </div>
              </div>
          </div>
          <Footer />
      </div>
  );
}

export default Home;