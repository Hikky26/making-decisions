// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// RUNTIME: O(n^2) because it is running two loops.
// SPACE COMPLEXITY: O(1) because one variable is used. 

function addToZero (arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr.includes(-arr[i])){
            return console.log(true)
        }
    }
    return console.log(false)
} 

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True