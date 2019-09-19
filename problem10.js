/* 
  Problem URL

  https://www.hackerrank.com/challenges/birthday-cake-candles/problem
*/

/* My Solution */
let birthdayCakeCandles = arr => {
  let maxHeight = arr[0];
  let count = 0;
  for (let i in arr) {
    if (arr[i] > maxHeight) {
      maxHeight = arr[i];
      count = 0;
      count += 1;
    } else if (arr[i] === maxHeight) {
      count += 1;
    }
  }
  return count;
};

let count = birthdayCakeCandles([1, 1, 1, 1, 1, 1, 2, 2]);
console.log("count", count);

/* My Solution 1 */
let birthdayCakeCandles1 = arr => {
  let maxHeight1 = arr[0];
  let count = arr.reduce((tempCount, val) => {
    if (val > maxHeight1) {
      maxHeight1 = val;
      tempCount = 0;
      tempCount += 1;
    } else if (val === maxHeight1) {
      tempCount += 1;
    }
    return tempCount;
  }, 0);
  return count;
};
let count1 = birthdayCakeCandles1([1, 1, 1, 1, 1, 1, -100, 2000, 30000, 30000]);
console.log("count1", count1);
