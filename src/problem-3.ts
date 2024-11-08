let sentence: string = "I love typescript";
let findWord: string = "typescript";
sentence = sentence.toLowerCase();

let words: string[] = sentence.split(" ");

function countWordOccurances(words: string[], word: string): number {
  return words.filter((w) => w === word).length;
}

console.log(countWordOccurances(words, findWord));