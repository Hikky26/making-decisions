console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted');
}
function compliment(evt){
	evt.preventDefault();
	
	alert('You are awesomely amazing all the time!');
}

function giveMeRestaurant(evt){
	evt.preventDefault();
	
	const restaurants = ['Texas Halal Pizza', 'Agas Restaurant','Alings Chinese Food Restaurant','Twisted Turban', 'Alrawshe', 'Wataburger']
	const random = Math.floor(Math.random() * restaurants.length);
	alert(`Try ${restaurants[random]}!`);
}

let rest = document.querySelector('#findRestaurant');
let form = document.querySelector('#contact');
let pic = document.querySelector('img');

rest.addEventListener('click',giveMeRestaurant);
form.addEventListener('submit', handleSubmit);
pic.addEventListener('mouseover', compliment);