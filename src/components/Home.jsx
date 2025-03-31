import React from "react";
import { Link } from "react-router-dom";
import yourImage from "/images/food-homepage.webp"; 

const Home = () => {
  return (
    <div className="relative container mx-auto px-4 py-8">
      {/* Image section */}
      <div className="relative">
        <img
          src={yourImage} 
          alt="Recipe" 
          className="w-full h-dvh object-cover rounded-lg shadow-lg" 
        />
        
        
        <div className="absolute justify-center items-center place-content-center text-white w-1/2 top-[0px] h-dvh bg-linear-to-r from-black px-10">
          <h1 className="text-5xl font-extrabold mb-6">Discover Tasty Recipes to Try!</h1>
          {/* <p className="text-xl mb-6">
          Cook up something amazing with easy-to-follow recipes!
          </p> */}
          <Link
            to="/recipes" 
            className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-600 transition-all view-recipes-btn"
          >
            SEE THE RECIPES
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
