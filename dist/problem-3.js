"use strict";
let sentence = "I love typescript";
let findWord = "typescript";
sentence = sentence.toLowerCase();
let words = sentence.split(" ");
function countWordOccurances(words, word) {
    return words.filter((w) => w === word).length;
}
console.log(countWordOccurances(words, findWord));
