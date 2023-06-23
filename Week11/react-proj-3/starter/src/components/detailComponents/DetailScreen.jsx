import React, { useEffect, useState } from 'react'
import './DetailScreen.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailScreen = () => {  
  const [recipe, setRecipe] = useState([])
  const {id} = useParams();

  useEffect(() => {
    axios
      .get(`https://recipes.devmountain.com/recipes/${id}`)
      .then((res) => {
        setRecipe(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!recipe) {
    return <div>Loading...</div>;
  }


  return (
    <section>
      <div id='recipe-name'
        style={{
          background:`linear-gradient(
            190deg, 
            rgba(0, 0, 0, 0.8), 
            rgba(0, 0, 0, 0.8)),
            url(${recipe.image_url})`,
            backgroundSize: 'cover',
            backgroundPosition:'center'
        }}
        >
          <div id='recipe-name-txt'>
            <h2>{recipe.recipe_name}</h2> 
          </div>
        </div>
        <div className='recipe-deets'>
          <div className='recipe-and-ingredients'>
            <div className='recipe-info'>
              <h2 className='sub-head'>Recipe</h2>
              <h4 className='deets'>Recipe Type: {recipe.type}</h4>
              <h4 className='deets'>Cook Time: {recipe.cook_time}</h4>
              <h4 className='deets'>Prep Time: {recipe.prep_time}</h4>
              <h4 className='deets'>Serves: {recipe.serves}</h4>
            </div>
            <div className='ingredients'>
              <h2 className='sub-head'>Ingredients</h2>
              <h4 className='deets'>You should try reading the instructions for the ingredients.</h4>
            </div>
          </div>
          <div className='instructions'>
            <h2 className='sub-head'>Instructions</h2>
            <p className='deets'
              style={{ whiteSpace:"pre-wrap"}}>{recipe.instructions && JSON.parse(recipe.instructions)}</p>
          </div>
        </div>

      {/* Welcome to the details page! This page will be reusable. Follow instructions to know what to do here. */}

    </section>
  );
};

export default DetailScreen;
  