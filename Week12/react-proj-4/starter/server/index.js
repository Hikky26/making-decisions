require('dotenv').config()

const express = require('express')
const cors = require('cors')

const {sequelize} = require('../server/util/database')
const {User} = require('./models/user')
const {Post} = require('./models/post')


const {SERVER_PORT} = process.env
console.log(SERVER_PORT)
const {getAllPosts, getCurrentUserPosts, addPost, editPost, deletePost} = require('./controllers/posts')
const {register, login, logout} = require('./controllers/auth')
const {isAuthenticated} = require('./middleware/isAuthenticated')


const app = express();
const chalk = require('chalk')

User.hasMany(Post)
Post.belongsTo(User)


app.use(express.json())
app.use(cors())


app.post('/register', register)
app.post('/logout', logout)
app.post('/login', login)
app.get('/posts', getAllPosts)
app.get('/userposts/:userId', getCurrentUserPosts)

app.post('/posts', addPost, isAuthenticated)
app.put('/posts/:id',editPost, isAuthenticated)
app.delete('/post/:id', deletePost, isAuthenticated)




// app.listen(SERVER_PORT, () =>
// console.log(`DB sync Successful and Server running on port ${SERVER_PORT}`))

sequelize.sync()
.then(() => {
    app.listen(SERVER_PORT, () =>
        console.log(chalk.gray(`DB sync Successful and Server running on port ${SERVER_PORT}`)))
})
.catch(err => console.log(err))



