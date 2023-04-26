let btn = document.querySelector('button')
let body = document.querySelector('body')

const btnClicked = (event) => {
    event.preventDefault();
    console.log('Button Clicked')
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
        .then((res) => {
            // let resident = res.data.results[0].residents
            for(i=0; i<res.data.results[0].residents.length; i++){
                // console.log(resident[i])
                axios.get(res.data.results[0].residents[i]).then((res) => {
                    let addThis = document.createElement('h2')
                    addThis.textContent = res.data.name
                    body.appendChild(addThis)

                })
            }
        })
}

btn.addEventListener('click', btnClicked)

// Make an axios request that gets the information about the planet Alderaan (use the search query to request it, the how to on the search query is at the bottom of the Getting Started section of the documentation)

