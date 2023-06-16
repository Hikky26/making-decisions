import React from "react";

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
        <Link >
          <button>Home</button>
          <button>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
