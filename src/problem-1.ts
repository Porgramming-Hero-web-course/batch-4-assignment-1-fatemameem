let numArray: number[] = [1, 2, 3, 4, 5];
let sum: number = 0;

function sumOfArray(numArray: number[]): number {
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
}

console.log(sumOfArray(numArray));