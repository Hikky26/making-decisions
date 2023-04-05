//////////////////////// add this later ////////////////////////
const readline = require('readline')

//////////////////////// Basics ////////////////////////
console.log('Hello, World!')

const firstName = 'Cameron'
let age = 31

console.log(firstName, age)

const isCool = true

let height

console.log(height)

//////////////////////// Numbers ////////////////////////
let x = 4 // => 4
let y = 10 // => 10
let z = 7 + 8 // => 15
let summedNums = x + y + z // => 29

console.log(summedNums)

//////////////////////// Strings ////////////////////////
let str1 = "String1"
let str2 = 'String2'
let str3 = `String3`

let lastName = "Stuart"

let concat = firstName + lastName

console.log(concat)

concat = firstName + " " + lastName + '😀'

console.log(concat)

console.log(`Hello, my name is ${firstName}.`)

//////////////////////// Getting User Input ////////////////////////

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// reader.question("Howdy, what's your name?", function(answer) {
//   console.log("Hi " + answer);
// });

reader.question("Enter a number to find out if it is odd or even: ", function(number) {
  if (number % 2 === 0) {
    console.log("Even")
  } else {
    console.log("Odd")
  }
});