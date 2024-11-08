let duplicateArray: number[] = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray: number[] = [];

function removeDuplicates(duplicateArray: number[]): number[] {
  for (let i = 0; i < duplicateArray.length; i++) {
    if (uniqueArray.indexOf(duplicateArray[i]) === -1) {
      uniqueArray.push(duplicateArray[i]);
    }
  }
  return uniqueArray;
}

console.log(removeDuplicates(duplicateArray));