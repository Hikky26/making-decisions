console.log('Running')

let message = document.querySelector('#message');

let form = document.querySelector('form');

//add movie to list when add button is pressed
const addMovie = (evnt) => {
    evnt.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    let ul = document.querySelector('ul')
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossedOffMovie)
    movie.appendChild(movieTitle);

    deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    
    movie.appendChild(deleteBtn)
    
    ul.appendChild(movie);
    inputField.value = " "
}

const deleteMovie = (evnt) => {
    let  holdParent = evnt.target.parentNode
    holdParent.remove();
    let tytle = holdParent.firstChild.textContent;
    message.textContent = `${tytle} has been deleted!`
    revealMessage()
}

form.addEventListener('submit', addMovie)


const crossedOffMovie = (evnt) => {
    evnt.target.classList.toggle('checked')
    if(evnt.target.classList.contains('checked')){
        message.textContent = `${evnt.target.textContent} watched!`;
    }else{
        message.textContent = `${evnt.target.textContent} added back!`;
    }
    revealMessage()
}
const revealMessage =() => {
    message.classList.remove('hide')
    const cb = () =>{
        message.classList.add('hide')
    }
    setTimeout(cb, 1000);
}


