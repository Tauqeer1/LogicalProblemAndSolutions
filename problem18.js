/* 
    Problem Url
    https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
 */

const { performance } = require('perf_hooks');

let scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

let breakingRecords1 = (scores) => {
  let minScore = scores[0];
  let maxScore = scores[0];
  let minScoreCount = 0;
  let maxScoreCount = 0;
  let lowestScore = [];
  let highestScore = [];

  let i = 0;
  while (i < scores.length) {
    if (scores[i] <= minScore) {
      if (scores[i] < minScore) {
        minScoreCount += 1;
      }
      minScore = scores[i];
    } else if (scores[i] >= maxScore) {
      if (scores[i] > maxScore) {
        maxScoreCount += 1;
      }
      maxScore = scores[i];
    }
    lowestScore.push(minScore);
    highestScore.push(maxScore);
    i++;
  }

  return [maxScoreCount, minScoreCount];
};

let b1t0 = performance.now();
let result1 = breakingRecords1(scores);
let b1t1 = performance.now();

console.log('scores', result1);
console.log('execution time breakingRecords1', b1t1 - b1t0);
