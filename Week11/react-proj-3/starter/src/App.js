import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {createBrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen"
import DetailScreen from "./components/detailComponents/DetailScreen"


// createBrowserRouter{[
//   {path:'', element}
// ]}

function App() {
  return (
    <div className="App">
      <Header />
      {/* This is where you will code for some of Part 1. */}
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path='newRecipe' element={<NewRecipeScreen />}/>
        <Route path='recipe/:id' element={<DetailScreen />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
