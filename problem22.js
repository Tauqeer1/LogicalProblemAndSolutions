/* 
    Problem Url
    https://www.hackerrank.com/challenges/bon-appetit/problem
 */

// bill = [2,4,6] // an array of integers
// Anna declines to eat k = bill[2] = k = 2 index of the array
// b = amount of money Anna contributed to the bill or amount that Brain charged from Anna

// My Solution
let bonAppetit = (bill, kIndex, bCharged) => {
  let sharedBillTotalAmount = bill
    .filter((item, index) => index !== kIndex)
    .reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);
  let bActual = sharedBillTotalAmount / 2;
  if (bCharged === bActual) {
    return 'Bon Appetit';
  } else {
    return bCharged - bActual;
  }
};

let result = bonAppetit([3, 10, 2, 9], 1, 7);
console.log('result', result);
