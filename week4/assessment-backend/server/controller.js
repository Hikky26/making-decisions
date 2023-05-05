let listOfAffirmations = [{id: 1, text:"I love who I am" }]
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
    getAffirmation: (req, res) =>{
        res.status(200).send(listOfAffirmations)
    },
    
    // the point here is for the user to add affirmations here and have it listed on the site. 
    //IT IS PERFECT!!!!!!!!!!! DON'T TOuCH =}
    makeAffirmation: (req, res) => {
        //make empty array of words
        
        let id = listOfAffirmations.length + 1
        let body = req.body
        let text = body.text
        let newAffirmation = {
            id: id,
            text,
        }
        listOfAffirmations.push(newAffirmation)
        res.status(200).send(listOfAffirmations)
        console.log(listOfAffirmations)
        // console.log(`Added new affirmation:${newAffirmation.newAffTxt}`)
    },
    deleteAffirmation: (req, res) => {
        const affirmationId = req.params.id
        const index = listOfAffirmations.findIndex(affirmation => affirmation.id === affirmationId)
        
        listOfAffirmations.splice(index, 1);
        res.status(200).send(listOfAffirmations)
        },
    
    
    updateMood: (req, res) => {
        const moods = [
            {mood: "happy", img:"https://media4.giphy.com/media/chzz1FQgqhytWRWbp3/200w.webp?cid=ecf05e474szxg2kmusu77gflrc22ld89zwgcyagc6fp45oyt&ep=v1_gifs_search&rid=200w.webp&ct=g"},
            {mood: 'angry', img:"https://media0.giphy.com/media/ZebTmyvw85gnm/giphy.webp?cid=ecf05e47b3hmnspmah5x0e2g3whh8plqtkskbqbyceomjv2u&ep=v1_gifs_search&rid=giphy.webp&ct=g"},
            {mood: 'sad', img:"https://media0.giphy.com/media/OPU6wzx8JrHna/200.webp?cid=ecf05e47ouikubsix3i4qq6dx7t1fzrsi67nmn2f1zs20vn5&ep=v1_gifs_search&rid=200.webp&ct=g"},
            {mood: 'excited', img:"https://media4.giphy.com/media/y8Mz1yj13s3kI/200.webp?cid=ecf05e47hqmrwyt525ln9xefugbd0bfu2wgfypswguuqnv9w&ep=v1_gifs_search&rid=200.webp&ct=g"},
            {mood: 'funny', img:"https://media2.giphy.com/media/Rlwz4m0aHgXH13jyrE/200w.webp?cid=ecf05e47sy19wqb81pq0d3bbfnadgsoqynyv0sw5rhk72eoe&ep=v1_gifs_search&rid=200w.webp&ct=g"},
            {mood: "I Don't Know", img:"https://media0.giphy.com/media/jPAdK8Nfzzwt2/200w.webp?cid=ecf05e478vsydomzp76epinb8pnec9n14fhc20jlk7c3dfwq&ep=v1_gifs_search&rid=200w.webp&ct=g"},

        ] 
        let {mood} = req.body
        // console.log(mood)
        
        for(let i = 0; i<moods.length; i++){
            if(String(mood) === String(moods[i].mood)){
                console.log(`We acknowledge you ${mood}ness`)
                // console.log(String(moods[i].mood))
                const moodObj = moods[i]
                res.status(200).send(moodObj.img)
                return
            // }else{
            //     console.log("Houston, we have a problem")
            // }
        }
    }
}
}