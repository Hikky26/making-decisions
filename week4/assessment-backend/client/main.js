const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addAffirmationBtn = document.getElementById('affirmation')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

//funtion for the event listener. the fuction serves to get data from the 'bank' and display it in a way that it shows up on the page for the user to see. 
//id is added to element to help style in css
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            
            const tempDiv = document.createElement('div');
            tempDiv.setAttribute("id", "tempdiv")
            tempDiv.textContent = data;
            document.body.appendChild(tempDiv);

            setTimeout(() => {
                document.body.removeChild(tempDiv);
              }, 3500);

    
    })
}

//function to make a list of affirmations and display it
function 
const makeAffirmation = () => {
    
    let newAffirmation = 
    axios.post("http://localhost:4000/api/affirmation", body)
        .then(function(res){
            //Need to make a list that dislplays. Like for each item in the list make an li
            for(let i=0; i<res.data.length; i++){
                listAffirmations(res.data[i])
            }
        })
}

const changeMood = () =>{

}

const deleteAffirmation = () => {
    
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addAffirmationBtn.addEventListener('click', makeAffirmation)