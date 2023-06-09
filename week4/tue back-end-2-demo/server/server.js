const  express = require('express')
const cors = require('cors')
const app = express()

//middle ware
//allows for other origins to hit the server. Allows for communication
app.use(cors())
//converts incoming data to json
app.use(express.json())

const userController = require('./controllers/userController')
const {getAllMovies, createMovie, deleteMovie, updateMovie} = userController


//routes
app.get('/api/movies', getAllMovies)
app.post('/api/movies', createMovie)
app.delete('/api/movies:movie_id', deleteMovie)
app.put('/api/movies:movie_id', updateMovie)


app.listen(4004, () => console.log('Listening on port 4004'))