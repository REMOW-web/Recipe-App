import React from "react";
import RecipeCard from "./RecipeCard";
// import recipes from "../data";

// const BreakfastRecipes = ({
//   theme,
//   isLoggedIn,
//   setShowLoginModal,
//   addToFavorites,
//   addComment,
//   filteredRecipes
// }) => {
  // const breakfastRecipes = recipes.filter((recipe) => recipe.category === "Breakfast");
  // console.log('breakfastRecipes:', breakfastRecipes);

  const BreakfastRecipes = ({ theme, isLoggedIn, setShowLoginModal, addToFavorites, addComment, filteredRecipes }) => {
    const breakfastRecipes = filteredRecipes.filter(recipe => recipe.category === "Breakfast");

  return (
    <div className="container mx-auto py-8">
      <h1>Breakfast Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {breakfastRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            theme={theme}
            isLoggedIn={isLoggedIn}
            setShowLoginModal={setShowLoginModal}
            addToFavorites={addToFavorites}
            addComment={addComment}
          />
        ))}
      </div>
    </div>
  );
};

export default BreakfastRecipes;
