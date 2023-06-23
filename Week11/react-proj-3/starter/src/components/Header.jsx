import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <h2 id="header-text">Devmountain Eatery</h2>
      <nav id="links">
        <Link to="">
          <button className="nav-btn">Home</button>
        </Link>
        <Link to="/newRecipe">
          <button className="nav-btn">Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
