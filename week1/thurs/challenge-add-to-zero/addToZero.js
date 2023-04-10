// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let check = false
for(i=0; i<array.length; i++){
    for(j= i+1; j<array.length; j++){
        if(array[j] + array[i] === 0){
            check = true
            break;
        }
    }
}
console.log(check)