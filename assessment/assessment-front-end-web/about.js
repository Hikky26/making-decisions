console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted');
}
function compliment(evt){
	evt.preventDefault();

	alert('You are aweseomely amazing all the time!')
}


let form = document.querySelector('#contact');
let pic = document.querySelector('img')

form.addEventListener('submit', handleSubmit);
pic.addEventListener('mouseover', compliment)