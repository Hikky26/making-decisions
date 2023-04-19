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
    evnt.target.parentNode.remove()
    message.textContent = 'MOVIE Deleted!'
}

form.addEventListener('submit', addMovie)


const crossedOffMovie = (evnt) => {
    evnt.target.classList.toggle('checked')
    if(evnt.target.classList.contains('checked')){
        message.textContent = 'MOVIE Watched!'
    }else{
        message.textContent = 'MOVIE added back!'

    }
}




