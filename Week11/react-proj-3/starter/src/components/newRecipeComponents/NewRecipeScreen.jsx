import { Formik } from "formik";
import React from "react";
import { useState } from "react";
import axios from "axios";

const NewRecipeScreen = () => {
  const [newRecipe, setNewRecipe]= useState({ 
    recipe_name:'', 
    type:'', 
    image_url:'', 
    cook_time:'',
    instructions: '',
    prep_time: '',
    recipe_id: '',
    serves:'',
    ingredients:[],
  })
  const [recipeName, setRecipeName] = useState('')
  const [url, setUrl] = useState('')
  const [prepTime, setPrepTime] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [serve, setServe] = useState('')
  const [recipeIngredient, setRecipeIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [instruction, setInstruction] = useState('')
  const [recipeType, setRecipeType] = useState('')
  const [quantity, setQuantity] = useState('')

  let initialValues = { 
    recipe_name:'', 
    type:'', 
    image_url:'', 
    cook_time:'',
    instructions: '',
    prep_time: '',
    recipe_id: '',
    serves:'',
    ingredients:[],
  }

  const handleQuantityChange = (e) => {
      setQuantity(e.target.value);
  }
  const handleRecipeNameChange = (e) => {
      setRecipeName(e.target.value);
  } 
  const handleUrlChange = (e) => {
      setUrl(e.target.value);
  } 
  const handlePrepTimeChange = (e) => {
      setPrepTime(e.target.value);
  } 
  const handleCookTimeChange = (e) => {
      setCookTime(e.target.value);
  } 
  const handleServeChange = (e) => {
      setServe(e.target.value);
  } 
  const handleRecipeIngredientChange = (e) => {
      setRecipeIngredient(e.target.value);
  } 
  const handleRecipeTypeChange = (e) => {
      setRecipeType(e.target.value);
  }
  const handleInstructionChange = (e) => {
      setInstruction(e.target.value);
  }
  const handleAddIngredient = () => {
    const newIngredient = {
      name: recipeIngredient,
      quantity: quantity,
    };
    setIngredients([...ingredients, newIngredient]);
    setQuantity('');
    setIngredients([])
  };

  // const handleSubmit = (values) => {
  //   values.ingredients = recipeIngredients
  //   console.log(newRecipe)
  // }

  const onSubmit = (values) => {
    const updatedRecipe = {
      ...newRecipe,
      recipe_name: values.recipe_name,
      type: values.type,
      image_url: values.image_url,
      cook_time: values.cook_time,
      instructions: values.instructions,
      prep_time: values.prep_time,
      serves: values.serves,
      ingredients: ingredients,
    };
    setNewRecipe(updatedRecipe);
    axios
      .post(`https://recipes.devmountain.com/recipes`, updatedRecipe)
      .then((res) => {
        console.log('Recipe submitted:', res.data )
      })
      .catch((err) =>{
        console.log('error submitting recipe')
      })
    setIngredients([])
  };



  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values, handleChange, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className="rec-title-url">
          <div id="rec-title">
            <label htmlFor="recipeTitle">Name of the Recipe:</label>
            <input 
              type="text" 
              id="recipe_name" 
              name="recipe_name" 
              value={values.recipe_name} 
              onChange={handleChange}/>
          </div>
          <div className="rec-url">
            <label htmlFor="recipeURL">Enter image URL for recipe:</label>
            <input 
              type="text" 
              id='image_url' 
              name="image_url" 
              value={values.image_url} 
              onChange={handleChange}/>
          </div>
        </div>
        <div>
          <div className="type-radio">
            <input 
              type="radio" 
              id="type-Cook" 
              name="type" 
              value='Cook' 
              onChange={handleChange}/>
            <label htmlFor="recipeType-Cook">Cook</label>
          </div>
          <div className="type-radio">
            <input 
              type="radio" 
              id="type-Bake" 
              name="type" 
              value='Bake' 
              onChange={handleChange}/>
            <label htmlFor="recipeType-Bake">Bake</label>
          </div>
          <div className="type-radio">
            <input 
              type="radio" 
              id="type-Drink"
              name="type"
              value='Drink' 
              onChange={handleChange}/>
            <label htmlFor="recipeType-Drink">Drink</label>
          </div>
        </div>
        <div className="prep-cook-serve">
          <div className="prep-time">
            <label htmlFor="prep-time">Prep Time:</label>
            <input 
              type="text" 
              id='prep_time' 
              name="prep_time" 
              value={values.prep_time} 
              onChange={handleChange}/>
          </div>
          <div className="cook_time">
            <label htmlFor="cook_time">Cook Time:</label>
            <input 
              type="text" 
              id='cook_time' 
              name="cook_time" 
              value={values.cook_time} 
              onChange={handleChange}/>
          </div>
          <div className="servings">
            <label htmlFor="serves">Serves:</label>
            <input 
              type="text" 
              id='serves' 
              name="serves" 
              value={values.serves} 
              onChange={handleChange}/>
          </div>
        </div>
        <div className="ingredients-list">
          <div className="ingredients-input">
            <div className="ingredientName">
              <label htmlFor="ingredient">Enter ingredient:</label>
              <input type="text" id="ingredient" placeholder="Ingredient" value={recipeIngredient} onChange={handleRecipeIngredientChange}/>
            </div>
            <div className="ingredientQuantity">
              <label htmlFor= "quantity">Enter total quantity needed:</label>
              <input type="text" id="quantity" placeholder="Quantity" value={quantity} onChange={handleQuantityChange}/>
            </div>
          </div>
          <div className="ingredient-output">
            <ul>
              {ingredients.map((ingredients, index) => (
              <li key={index}>
                {ingredients.quantity} {ingredients.name} 
              </li>
              ))}
            </ul>
          </div>
          <button type="button" onClick={handleAddIngredient}>
            Add Ingredient
          </button>
        </div>
        <div className="intruction">
          <label htmlFor="instruction-box">Enter Recipe instructions</label>
          <input 
            type="text" 
            name="instruction" 
            id="instruction-box" 
            value={values.instructions}
            onChange={handleInstructionChange}/>
        </div>
        <button 
          type="button" 
          id="submitNewRecipe" 
          onClick={handleSubmit}>
            Submit Recipe
        </button>
      </form>
      )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
