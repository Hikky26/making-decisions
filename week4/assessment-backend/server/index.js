const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getAffirmation, makeAffirmation, updateMood, deleteAffirmation } = require('./controller')

app.get("/api/compliment", getCompliment);


//feature 1
//  add fortune (GET)
app.get("/api/fortune", getFortune);

//feature 2
//add self affirmations(POST)
app.get("/api/affirmation", getAffirmation)
app.post("/api/affirmation", makeAffirmation)
// app.get("/api/affirmation", getAffirmation)

//feature 3
// replace mood of the day (PUT)
// app.get("/api/mood/", showMood)
app.put("/api/mood", updateMood)

//feature 4
// delete affirmations (DELETE)
app.delete("/api/affirmation/:id", deleteAffirmation)

app.listen(4000, () => console.log("Server running on 4000"));