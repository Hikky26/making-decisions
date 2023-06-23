import React from 'react'
import './RecipeCard.css'
import { useNavigate } from 'react-router-dom'




const RecipeCard = ({recipe}) => {
  
  const data = [
    {
      cook_time: "30 minutes",
      image_url: "https://midwestcommunity.org/wp-content/uploads/2018/02/Groceries-ThinkstockPhotos-836782690.jpg",
      instructions: "\"Drive to the store for 15 minutes take 30 minutes to buy food.\\n\\nTada, you have a meal.\"",
      prep_time: "15 minutes",
      recipe_id: 1,
      recipe_name: "Easy Meal",
      serves: "4 people",
      type: "Cook"
    },
    {
      cook_time: "90 minutes",
      image_url: "https://www.kingarthurbaking.com/sites/default/files/2020-02/the-easiest-loaf-of-bread-youll-ever-bake.jpg",
      instructions: "\"Place flour and water in a tin. Bake for 90 minutes.\\n\\nNo guarantee this is gonna be good, but it was technically baked I suppose.\"",
      prep_time: "30 minutes",
      recipe_id: 2,
      recipe_name: "The Best Bread",
      serves: "2 people",
      type: "Bake"
    },
    {
      cook_time: "25 minutes",
      image_url: "https://hips.hearstapps.com/hmg-prod/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg",
      instructions: "\"Preheat oven to 350. Place tinfoil over a baking sheet, coat in olive oil spray, and place rings of pineapple in the middle of the tinfoil covering an area large enough to support the slice of salmon you have selected.\\n\\nCreate your salmon rub by mixing together the brown sugar, salt, pepper, and cayanne in a bowl. Rub the top of your salmon with a heavy coating of the rub. Place the salmon on the pineapple, and place into the oven for 25 minutes (or until cooked, depending on the slice of salmon).\\n\\nWhile the salmon is baking, create the garnish by mixing the melted butter, green onion, and garlic. After the salmon has cooked, pull it out and coat the salmon in the garnish you created. Broil the salmon for another 1.5 minutes.\\n\\nPull the salmon out, garnish it with another coat of our garnish mix, and serve!\"",
      prep_time: "10 minutes",
      recipe_id: 3,
      recipe_name: "Pineapple Salmon",
      serves: "6 people",
      type: "Bake"
    }
  ];
  
  console.log(recipe)
  console.log(recipe.recipe_id)
  console.log(data[0].recipe_id)
  
  
  const navigate = useNavigate()
  
  const seeMore = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }
  
  if (!recipe || recipe.length === 0) {
    return <div>Loading...</div>; 
  }
  
  return (
    <div>
      <div className='recipe-card'>
        <div>
          <div className='img-div'>
            <img src={recipe.image_url} alt="Storage image" />
          </div>
          <h2>{recipe.recipe_name}</h2>
        </div>
        <button className='see-more-btn' onClick={seeMore}>See More</button>
      </div>
    </div>
  )
}

export default RecipeCard