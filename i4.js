// Favorite recipe information
const favoriteRecipe = {
    title: "Your Favorite Recipe Title", // Replace with your favorite recipe title
    servings: 4, // Number of servings
    ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"] // Replace with your recipe's ingredients
  };
  
  // Log recipe title
  console.log(favoriteRecipe.title);
  
  // Log recipe servings
  console.log('Serves: ${favoriteRecipe.servings}');
  
  // Log recipe ingredients
  console.log("Ingredients:");
  for (const ingredient of favoriteRecipe.ingredients) {
    console.log(ingredient);
  }