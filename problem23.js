// Problem url
// https://leetcode.com/problems/two-sum/

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};

let arr = [2, 7, 11, 15];
let target = 9;

let arr1 = [3, 2, 4];
let target1 = 6;

let arr2 = [3, 3];
let target2 = 6;

let arr3 = [2, 5, 5, 11];
let target3 = 10;

let result = twoSum(arr3, target3);
console.log('result', result);
