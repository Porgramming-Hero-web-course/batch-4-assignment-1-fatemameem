"use strict";
let numArray = [1, 2, 3, 4, 5];
let sum = 0;
function sumOfArray(numArray) {
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
}
console.log(sumOfArray(numArray));
