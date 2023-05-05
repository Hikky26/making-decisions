const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addAffirmationBtn = document.getElementById('add')
const deleteAffirmationBtn = document.getElementById('delete')
const moodSelect = document.getElementById('listOfMoods')
const imgContainer = document.getElementById("dropImghere");


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
        fortuneBtn.appendChild(tempDiv);
        
        setTimeout(() => {
            fortuneBtn.removeChild(tempDiv);
        }, 3500);
        
        
    })
}
const getAffirmation = () => {
    axios.get('http://localhost:4000/api/affirmation').then(affirmCallback)
    .catch((error) => {
        console.log(error)
    })
}

///New goal here is to make affirmation cards. Similar to the house cards




//function to  DELETE each affirmtation. The goal is to add buttions to each and when deleted the id is taken and the affirmation is removed from the list.
const deleteAffirmation = (id) => {
    axios.delete(`http://localhost:4000/api/affirmation/${id}`)
    .then(affirmCallback)
    .catch(function(error){
        console.log(error);
    });
}

//POST affirmation - good
const submitAffirmation = (e) => {
    e.preventDefault()
    
    let affirmaton = document.getElementById('affirmationInput')
    let bodyObj ={
        text: affirmaton.value
    }
    createAffirmation(bodyObj)
    
    affirmaton.value = ''
}
const createAffirmation = body => {
    axios.post('http://localhost:4000/api/affirmation', body)
    .then(affirmCallback)
    .catch(function(error){
        console.log(error);
    });
}
const affirmCallback =({data : affirmationArray}) =>{
    affirmationArray.forEach((element) =>{
        console.log(element.newAffText)
    })
    displayWordsAsList(affirmationArray)
}
const displayWordsAsList = (arr) => {
    const listAffHere = document.querySelector('#listParent')
    listAffHere.innerHTML = "";
    for(let i = 0; i<arr.length; i++){
        const delbtn = document.createElement('button')
        const listItem = document.createElement("li")
        listItem.classList.add('affList')
        delbtn.classList.add('del')
        listItem.textContent = arr[i].text;
        delbtn.textContent = 'X'
        console.log(arr[i])
        listAffHere.appendChild(listItem)
        listItem.appendChild(delbtn)
        delbtn.addEventListener('click',() => {deleteAffirmation(arr[i].id)});
        
    }
}
    
//function to test pPUT
const updateMood = (event) =>{
    event.preventDefault()
    const selectedMood = moodSelect.value;
    // console.log(selectedMood)
    axios.put(`http://localhost:4000/api/mood`, {mood: selectedMood})
        .then((res) => {
            console.log(res.data);
            displayImg(res.data)
        })
        .catch((error) => {
            console.log(error)
        })

}
const getImgSrc = (moods) =>{
    console.log(moods)
    return moods.img;
}
const displayImg = (imageSrc) => {
    const image = document.createElement('img');
    getImgSrc(imageSrc)
    image.classList.add("img")
    image.src = imageSrc;
    imgContainer.innerHTML= ""
    imgContainer.appendChild(image)
    // console.log(image.src)
}

getAffirmation()
// showMood()

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addAffirmationBtn.addEventListener('click', submitAffirmation)
// deleteAffirmationBtn.addEventListener('click', deleteAffirmation(id))
// the delete affirmation is in the display words as List function
moodSelect.addEventListener('change', updateMood)

