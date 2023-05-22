// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// RUNTIME analysis: I believe it depends on the two loops i have here. Since I have to compare the letter on both sides of the function. So it is O(n^2) for the double loop. 
//SPACE COMPLEXITY: O(1) I believe because the function only has a one variable that is being checked within it. . 

const hasUniqueChars = (word) => {
    for(let i = 0; i < word.length; i++){
        if(word.lastIndexOf(word[i]) !== word.indexOf(word[i])){
        return false
        }
    }
    return true
}


console.log(hasUniqueChars("Monday"))
// -> True

console.log(hasUniqueChars("Moonday"))
// -> False