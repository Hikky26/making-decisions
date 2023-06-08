import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/Watchlist';
import axios from 'axios';



function App() {
  const [movieList, setMovieList] = useState([])
  const [watchList, setWatchList] = useState([])
  const [page, setPage] = useState(1)

  const getData =() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        setMovieList(res.data.results)
      });
  };

  const addMovie =(movie) => {
    setWatchList([...watchList, movie])
  }

  useEffect(()=>{ 
    getData();
  },[page])

  const removeMovie = (movie) => {
    const cb = (mov) => {
      return mov !== movie
    }

    const newState = watchList.filter(cb)
    setWatchList(newState)
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <MovieScreen 
          list={watchList}
          page ={page}
          setPage={setPage}
          movieList={movieList}
          addMovie = {addMovie}
          removeMovie = {removeMovie}
          />
          <Watchlist
            list = {watchList}
            removeMovie = {removeMovie}
          />
      </main>
    </div>
  );
}

export default App;
