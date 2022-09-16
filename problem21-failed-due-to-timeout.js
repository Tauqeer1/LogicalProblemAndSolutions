/**
 * Problem url
 * https://www.hackerrank.com/challenges/migratory-birds/problem
 */

let arr1 = [1, 1, 2, 2, 3];
let arr2 = [1, 4, 4, 4, 5, 3];
let arr3 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

// My solutions, failed because of -> Terminated due to timeout
let newCountingBirds = (arr) => {
  let count = 0;
  let newNumber = 0;
  let birdsObject = {};
  for (let i = 0; i < arr.length; i++) {
    if (newNumber !== arr[i]) {
      count = 0;
      newNumber = arr[i];
      count = arr.filter((value) => value === newNumber).length;
      birdsObject[`${newNumber}`] = count;
    }
  }
  return Object.entries(birdsObject).sort((x, y) => y[1] - x[1])[0][0];
  // return key;
  // return birdsObject;
};

const resObj = newCountingBirds(arr3);
console.log('resObj', resObj);
