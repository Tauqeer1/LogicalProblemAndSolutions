/* 

  Given Problem

  Given five positive integers, find the minimum and maximum values that can be calculated by 
  summing exactly four of the five integers. Then print the respective 
  minimum and maximum values as a single line of two space-separated long integers.

  Program URL
  https://www.hackerrank.com/challenges/mini-max-sum/problem

*/

/* My Solution */
let minMaxSum = arr => {
  arr = arr.sort();
  let higestSum = 0;
  let lowestSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      lowestSum += arr[i];
    }
    if (i > 0) {
      higestSum += arr[i];
    }
  }
  console.log("minMaxSum", lowestSum, higestSum);
};

minMaxSum([1, 2, 3, 4, 5]);

/* My Solution 1 */
let minMaxSum1 = arr => {
  let higestSum = arr
    .filter(val => Math.min(...arr) < val)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  let lowestSum = arr
    .filter(val => Math.max(...arr) > val)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  console.log("minMaxSum1", lowestSum, higestSum);
};

minMaxSum1([1, 2, 3, 4, 5]);

/* Solution 2 */
let minMaxSum2 = arr => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  let lowestSum = sum - max;
  let higestSum = sum - min;
  console.log("minMaxSum2", lowestSum, higestSum);
};

minMaxSum2([1, 2, 3, 4, 5]);
