let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')

function faveColor (evt){
    evt.preventDefault();
    alert("My favorite color is PURPLE!!!")
}
function favePlace(evt){
    evt.preventDefault();
    alert('My favorite place in the world is Medinah')
}
function faveRitual(evt){
    evt.preventDefault();
    alert('My favorite ritual is performing my five daily prayers on time :D')
}

color.addEventListener('click',faveColor)
place.addEventListener('click',favePlace)
ritual.addEventListener('click',faveRitual)
