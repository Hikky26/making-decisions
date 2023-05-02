module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    // here will be for the get feature to pull out fortunes for when the button is clicked 
    getFortune: (req, res) => {
        const fortunes = ["Your happiness is before you, not behind you! Cherish it.","You can see a lot just by looking.", "There is a time for caution, but not for fear.", "It’s not the amount of time you devote, but what you devote to the time that counts.", "In order to take, one must first give."];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    // the point here is for the user to add affirmations here and have it listed on the site. 
    makeAffirmation: (req, res) => {
        //make empty array of words
        let newAffirmation = req.body
        let wordsOfAffirmation = ["I love who I am"]
        wordsOfAffirmation.push(newAffirmation)
        res.status(200).send(wordsOfAffirmation)
    },

    changeMood: (req, res) => {

    },

    deleteAffirmation: (req, res) => {

    },

}