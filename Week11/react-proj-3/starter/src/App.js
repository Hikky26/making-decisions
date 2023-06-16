import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {createBrowserRouter } from 'react-router-dom'


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
