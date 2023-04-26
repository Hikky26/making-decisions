
const pokedex = document.querySelector('.pokedex')

for(let i=1; i<150; i++){
    let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    console.log(pokeImg);

    let imgTag = document.createElement(img)
    imgTag.src = pokeImg;
    pokedex.appendChild(imgTag)
}

let query = document.querySelector('input')
let searchBtn = document.querySelector('button')

const submitHandler = (ev) => {
    ev.preventDefault();
    console.log(query.value)
    
    let pokemon = query.value

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then((res) => {
            console.log(res.data);
            console.log(res.data.sprites.front_default)
            let img =document.querySelector('img')
            img.src = res.data.sprites.front_default
        })
        .catch(err => console.log(err))
}

searchBtn.addEventListener('click', submitHandler)
