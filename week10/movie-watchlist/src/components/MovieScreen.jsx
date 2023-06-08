import MovieCard from "./MovieCard"

const MovieScreen = ({list, page, setPage, movieList, addMovie, removeMovie}) => {

    const movieDisplay =movieList.map((movie, index) => {
        return (
            <MovieCard 
            movie = {movie}
            addMovie={addMovie} 
            removeMovie = {removeMovie}
            list = {list}
          />
            )
        })
        
    const increment = () => {
        setPage(page++)
    }
    const decrement = () => {
        if (page !== 1) {
            setPage(page--)
        }
    }

        return (
            <div className="page">
                <h1>Hikmah's Movie Theatre</h1>
                <h3>Add a Movie to Your WatchList</h3>
                <div className="btn-container">
                    <button onClick={decrement}>Previous</button>
                    <button onClick={increment}>Next</button>
                </div>
                <div className="movie-container">{movieDisplay}</div>
            </div>
    )
}

export default MovieScreen;