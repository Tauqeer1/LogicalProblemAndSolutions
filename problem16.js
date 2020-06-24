/*
    Problem url
    https://www.hackerrank.com/challenges/kangaroo/problem
 */

const { performance } = require('perf_hooks');
/* My solution */
// solution is ok but execution time is high
let kangaroo = (x1, v1, x2, v2) => {
  let willMeet = 'NO';
  for (let x = 0; x <= 10000; x++) {
    x1 = x1 + v1;
    x2 = x2 + v2;
    if (x1 === x2) {
      willMeet = 'YES';
      return;
    }
  }
  return willMeet;
};

let k0t0 = performance.now();
let result = kangaroo(0, 2, 5, 3);
let k0t1 = performance.now();

console.log('will meet', result);
console.log('execution time in milliseconds', k0t1 - k0t0);

/* Other's solutions */

/* Solution 1 */
let kangaroo1 = (x1, v1, x2, v2) => {
  if (x1 === x2 && v1 === v2) {
    //if speed and distance is equal
    return 'YES';
  } else if (x1 === x2 && v1 > v2) {
    //if initial distance is same but car1 speed > car2's
    return 'NO';
  } else if (x1 === x2 && v1 < v2) {
    //if initial distance is same but car1 speed < car2's
    return 'NO';
  } else if (x1 < x2 && v1 === v2) {
    //if speed is same but car1 is behind car2
    return 'NO';
  } else if (x1 > x2 && v1 === v2) {
    //if speed is same but car1 is ahead of car2
    return 'NO';
  } else if ((x1 < x2 && v1 < v2) || (x2 < x1 && v2 < v1)) {
    //if distance and speed of each car is less than that of other one
    return 'NO';
  } else {
    if ((x2 - x1) % (v2 - v1) === 0) {
      return 'YES';
    } else {
      return 'NO';
    }
  }
};

let k1t0 = performance.now();
let result1 = kangaroo1(0, 2, 5, 3);
let k1t1 = performance.now();
console.log('result1', result1);
console.log('execution time in milliseconds ', k1t1 - k1t0);

/* Solution 2 */
let kangaroo2 = (k1, v1, k2, v2) => {
  let canMeet = false;
  if (v2 > v1) {
    return 'NO';
  }
  if (v2 === v1) {
    return 'NO';
  }
  while (k1 < k2) {
    k1 += v1;
    k2 += v2;
    if (k1 === k2) {
      canMeet = 'YES';
    }
  }
  return canMeet;
};
let k2t0 = performance.now();
let result2 = kangaroo2(0, 2, 5, 3);
let k2t1 = performance.now();
console.log('result2', result2);
console.log('execution time in milliseconds ', k2t1 - k2t0);

/* Solution 3 */
let kangaroo3 = (x1, v1, x2, v2) => {
  let canMeet = 'NO';
  if (v1 > v2) {
    while (x1 <= x2) {
      if (x1 == x2) {
        canMeet = 'YES';
        break;
      }
      x1 += v1;
      x2 += v2;
    }
    if (x1 > x2) {
      canMeet = 'NO';
    }
  } else {
    canMeet = 'NO';
  }
  return canMeet;
};

let k3t0 = performance.now();
let result3 = kangaroo3(0, 2, 5, 3);
let k3t1 = performance.now();
console.log('result3', result3);
console.log('execution time in milliseconds ', k3t1 - k3t0);
