import React, {useEffect, useState} from 'react'
import AdBanner from './AdBanner'
import RecipeCard from '../RecipeCard';
import axios from 'axios'
import SearchRecipe from './SearchRecipe'
import './HomeScreen.css'




const HomeScreen = () => {  
  const [recipes, setRecipes] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const getRecipes = () => {
    axios
      .get(`https://recipes.devmountain.com/recipes`)
      .then((res) => {
        setRecipes(res.data)
        console.log(recipes)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  useEffect(() => {
    getRecipes();
    // console.log(recipes)
  }, []);
  console.log(recipes)
  

  
  return (
    <div>
      <AdBanner />
      <SearchRecipe recipes = {recipes}/>
      <div className='recipe-cards-container'>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.recipe_id} recipe={recipe} />
      ))}
      </div>
    </div>
  )
}

export default HomeScreen