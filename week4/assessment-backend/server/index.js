const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

app.listen(4000, () => console.log("Server running on 4000"));


//feature 1
//  add fortune (GET)

//feature 2
    //add self affirmations(POST)

//feature 3
    // add mood of the day (PUT)

//feature 4
    // delete to do list for self joy?