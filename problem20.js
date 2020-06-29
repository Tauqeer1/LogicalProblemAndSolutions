/* 
    Problem Url
    https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
 */
/* My solution */
let divisibleSumPairs = (n, k, ar) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        count += 1;
      }
    }
  }
  return count;
};
// let arr = [1, 2, 3, 4, 5, 6];
let arr = [1, 3, 2, 6, 1, 2];
let k = 3;
let pairs = divisibleSumPairs(arr.length, k, arr);
console.log('pairs', pairs);
