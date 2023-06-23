import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'
import RecipeCard from '../RecipeCard'
import './SearchRecipe.css'


const SearchRecipe = ({recipes}) => {
  const [search, setSearch] = useState('')
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // const searchHandle = (e) => {
  //   setSearch(e.target.value) 
  // }

  const handleSearch = (searchInput) => {
    const filterRecipes = recipes.filter((recipe) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = searchInput.toLowerCase();
      return title.includes(searchParams)
    })
    setFilteredRecipes(filterRecipes)
  }

  return (
    <section>
      <h2 className='search-title'>Search a recipe!</h2>
      <span className='searchBar'>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a Recipe"
        />
        <button onClick={()=> handleSearch(search)}>Search</button>
      </span>
      <div className='recipe-container'>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <RecipeCard recipe={recipe} key={index} />
          ))
        ) : (
          <h2>No Recipes :(</h2>
        )}
      </div>
    </section>
  )
}

export default SearchRecipe