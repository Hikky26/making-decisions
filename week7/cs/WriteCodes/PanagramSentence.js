// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// RUNTIME anlysis for this looks like it would be O(n)
// SPACE COMPLEXITY is probably O(1) due to only the alphabet and the sentence that was passed in.


const isPangram = (sentence) =>{
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0; i < alphabet.length; i++){
        if(!sentence.toLowerCase().includes(alphabet[i])){
            return false
        }
    }
    return true
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// -> True

console.log(isPangram("I like cats, but not mice"))
// -> False