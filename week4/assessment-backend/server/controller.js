module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    // the point here is for the user to add affirmations here and have it listed on the site. 
    makeAffirmation: (req, res) => {
        //make empty array of words
        let wordsOfAffirmation = ["I love who I am"]

        res.status(200).send(wordsOfAffirmation)
    }

}