/* 
  Given problem

  Given an array of integers, calculate the fractions of its elements 
  that are positive, negative, and are zeros. Print the decimal value of each fraction
  on a new line. 

  Problem URL
  https://www.hackerrank.com/challenges/plus-minus/problem
  
*/
/* My Solution */
let plusMinus = arr => {
  let arrLength = arr.length;
  let count = {
    positiveCount: 0,
    negativeCount: 0,
    zeroCount: 0
  };
  let fraction = {
    positiveFraction: 0,
    negativeFraction: 0,
    zeroFraction: 0
  };
  arr.map(elem =>
    elem > 0
      ? count.positiveCount++
      : elem < 0
      ? count.negativeCount++
      : count.zeroCount++
  );

  fraction.positiveFraction = parseFloat(
    count.positiveCount / arrLength,
    10
  ).toFixed(6);
  fraction.negativeFraction = (count.negativeCount / arrLength).toFixed(6);
  fraction.zeroFraction = (count.zeroCount / arrLength).toFixed(6);
  return fraction;
};

let res = plusMinus([-4, 3, -9, 0, 4, 1]);

/* Solution 1 */
let plusMinus1 = arr => {
  let fractionObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      // positive number
      fractionObj.positiveCount++;
    } else if (arr[i] < 0) {
      // negative number
      fractionObj.negativeCount++;
    } else {
      // zero number
      fractionObj.zeroCount++;
    }
  }
  const { positiveCount, negativeCount, zeroCount } = fractionObj;
  let positiveFraction = parseFloat(positiveCount / arr.length, 10).toFixed(6);
  let negativeFraction = parseFloat(negativeCount / arr.length, 10).toFixed(6);
  let zeroFraction = parseFloat(zeroCount / arr.length, 10).toFixed(6);
};

/* Solution 2 */
let plusMinus2 = arr => {
  let positives = arr.filter(function(value) {
    return value > 0;
  }).length;
  let negatives = arr.filter(function(value) {
    return value < 0;
  }).length;
  let zeros = arr.filter(function(value) {
    return value === 0;
  }).length;

  console.log(positives / arr.length);
  console.log(negatives / arr.length);
  console.log(zeros / arr.length);
};

// plusMinus2([-4, 3, -9, 0, 4, 1]);

/* Solution 3 */
let plusMinus3 = arr => {
  let neg = 0,
    pos = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      neg++;
    } else if (arr[i] > 0) {
      pos++;
    }
  }

  console.log((pos / arr.length).toFixed(6));
  console.log((neg / arr.length).toFixed(6));
  console.log(((arr.length - (pos + neg)) / arr.length).toFixed(6));
};
plusMinus3([-4, 3, -9, 0, 4, 1]);
