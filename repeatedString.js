// https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

let countOfA = (length) => {
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (s.charAt(i) === 'a') {
      count++;
    }
  }
  return count;
};

let s = 'aba';
let n = 10;
let totalCountOfA = 0;
let subStringLength = s.length;
let countOfAInSubString = countOfA(subStringLength);
let subStringRepetition = parseInt(n / subStringLength);
let lengthCovered = subStringLength * subStringRepetition;
let lengthRemaining = n - lengthCovered;

let countOfAInCoveredLength = subStringRepetition * countOfAInSubString;
// for remaining length count
let countOfAInRemainingLength = countOfA(lengthRemaining);

totalCountOfA = countOfAInCoveredLength + countOfAInRemainingLength;
console.log('totalCountOfA', totalCountOfA);
