/* 
// Problem URL
  https://www.hackerrank.com/challenges/apple-and-orange/problem

*/

/* My Solution */
let countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  let appleCount = apples
    .map(num => num + a)
    .filter(num => num >= s && num <= t).length;
  let orangeCount = oranges
    .map(num => num + b)
    .filter(num => num >= s && num <= t).length;

  console.log("appleCount", appleCount);
  console.log("orangeCount", orangeCount);
};

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

/* My Solution 1 without built in array methods */
let countApplesAndOranges1 = (s, t, a, b, apples, oranges) => {
  let appleCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < apples.length; i++) {
    let applePosition = apples[i] + a;
    appleCount =
      applePosition >= s && applePosition <= t ? (appleCount += 1) : appleCount;
  }
  for (let i = 0; i < oranges.length; i++) {
    let orangePosition = oranges[i] + b;
    orangeCount =
      orangePosition >= s && orangePosition <= t
        ? (orangeCount += 1)
        : orangeCount;
  }
};

countApplesAndOranges1(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
