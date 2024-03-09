// https://leetcode.com/problems/shuffle-the-array

var shuffle = function (nums, n) {
  let newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(nums[i], nums[i + n]);
  }
  return newArray;
};

// let nums = [2, 5, 1, 3, 4, 7];
// let n = 3;

let nums = [1, 1, 2, 2];
let n = 2;
let result = shuffle(nums, n);
console.log('result', result);

// Other's solution
// Solution 1
var shuffle1 = function (nums, n) {
  let start = 0,
    mid = n;
  const arr = [];
  while (mid < nums.length) {
    arr.push(nums[start++]);
    arr.push(nums[mid++]);
  }
  return arr;
};
