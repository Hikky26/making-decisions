// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

//RUNTIME for this code seems to be O(n) as it iterates over a loop and compares the value to the next. 
//SPACE COMPLEXITY may be O(1) because only the length variable is being used.
const findLongestWord = (words) => {
    let length = 0
    for(let i = 0; i < words.length; i++){
        if(words[i].length > length){
            length = words[i].length;
        }
    }
    return console.log(length)
}
findLongestWord(["hi", "hello"]);
// -> 5