/* 
    Problem Url
    https://www.hackerrank.com/challenges/the-birthday-bar/problem
 */

/* My solution */
let getSubArray = (arr, startingIndex, length) => {
  let subArray = [];
  for (let i = startingIndex; i < length; i++) {
    if (arr[i] !== undefined) {
      subArray.push(arr[i]);
    }
  }
  return subArray;
};

let birthday = (s, d, m) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    // let arr = s.slice(i, m + i); // change built in method to custom method
    let arr = getSubArray(s, i, m + i); // calling custom method
    if (arr.length === m) {
      let sum = arr.reduce((a, b) => a + b, 0); // change built in method to custom method
      if (sum === d) {
        count += 1;
      }
    }
  }
  return count;
};

// let s = [2, 2, 1, 3, 2];
// let s = [1, 2, 1, 3, 2];
// let s = [1, 1, 1, 1, 1, 1];
// let s = [4];
let s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
let d = 18; // Sum of birth day
let m = 7; // month
let count = birthday(s, d, m);
console.log('count', count);

/* Solution 1 */
let birthday1 = (s, d, m) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = 0;
    for (let j = i; j < i + m; j++) {
      sum += s[j];
    }
    if (sum == d) {
      count++;
    }
  }
  return count;
};

let count1 = birthday1(s, d, m);
console.log('count', count1);
