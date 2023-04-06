// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let max = 0
let min = 0
for(let i = 0; i < array.length; i++){
    if(array[i]< min){
        min = array[i]
    }
    if(array[i]>max){
        max = array[i]
    }
}
console.log(min + ' , ' + max)


//Editing arrays
// (array).pop() removes the last item in the array
// (array).shift() removes the first item from an array
// (array).unshift() adds an item to the front of an array
// (array).slice(#,#) makes a copy of the array according to the range that was indicated in the argument
// (array).splice(target index, # of items to be removed starting at index, values to replace) can remove values and replace it 
// (array).length  gives the length of the array. THIS IS A PROPERTY!

