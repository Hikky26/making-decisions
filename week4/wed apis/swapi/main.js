let btn = document.querySelector('button')

const btnClicked = (event) => {
    event.preventDefault();
    console.log('Button Clicked')
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
        .then((res) => {
            let resident = res.data.results[0].residents
            for(i=0; i<resident.length; i++){
                console.log(resident[i])
                
            }
        })
}

btn.addEventListener('click', btnClicked)

// Make an axios request that gets the information about the planet Alderaan (use the search query to request it, the how to on the search query is at the bottom of the Getting Started section of the documentation)

