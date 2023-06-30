const express = require('express')
const cors = require('cors')

const app = express()

//middleware
app.use(express.json)
app.use(cors())

/////ENDPOINTS/////

app.get("/api/name", (req,res) => {
    res.status(200).send('Hikmah')
})







//////////////////////////////

app.listen(5050, () => console.log('Jammin on 5050')) 