/* 
  Given problem

  John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an 
  array of integers representing the color of each sock, determine how many pairs of socks with matching 
  colors there are.
  // Problem URL
  https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
*/

/* My Solution */
sockMerchant = (n, arr) => {
  let pairCount = 0;
  arr = arr.sort();
  for (let i = 0; i < n; i++) {
    if (arr[i] === arr[i + 1]) {
      pairCount++;
      i += 1;
    }
  }
  return pairCount;
};
let result = sockMerchant(20, [
  4,
  5,
  5,
  5,
  6,
  6,
  4,
  1,
  4,
  4,
  3,
  6,
  6,
  3,
  6,
  1,
  4,
  5,
  5,
  5
]);

/* Solution 1 */
sockMerchant1 = (n, arr) => {
  let ordered = {};
  for (let i = 0; i < n; i++) {
    if (ordered[arr[i]] === undefined) {
      ordered[arr[i]] = 1;
    } else {
      ordered[arr[i]]++;
    }
  }

  let keys = Object.keys(ordered);

  let sum = 0;
  for (let i = 0; i < keys.length; i++) {
    sum += Math.floor(ordered[keys[i]] / 2);
  }
  return sum;
};

const res = sockMerchant1(20, [
  4,
  5,
  5,
  5,
  6,
  6,
  4,
  1,
  4,
  4,
  3,
  6,
  6,
  3,
  6,
  1,
  4,
  5,
  5,
  5
]);

/* Solution 2 */
sockMerchant2 = (n, arr) => {
  var totals = {};
  for (var i = 0; i < n; i++) {
    var num = arr[i];
    if (totals[num] === undefined) {
      totals[num] = 0;
    }
    totals[num] = totals[num] + 1;
  }

  var pairs = 0;
  for (var prop in totals) {
    if (totals.hasOwnProperty(prop)) {
      var numSocks = totals[prop];
      pairs += Math.floor(numSocks / 2);
    }
  }
  return pairs;
};

const pair2 = sockMerchant2(20, [
  4,
  5,
  5,
  5,
  6,
  6,
  4,
  1,
  4,
  4,
  3,
  6,
  6,
  3,
  6,
  1,
  4,
  5,
  5,
  5
]);

/* Solution 3 */

sockMerchant3 = (n, arr) => {
  const sums = arr.reduce((sums, s) => {
    if (!sums[s]) sums[s] = 1;
    else sums[s] += 1;
    return sums;
  }, {});
  const pairs = Object.keys(sums).reduce((prev, key) => {
    prev += Math.floor(sums[key] / 2);
    return prev;
  }, 0);
  return pairs;
};

const pair3 = sockMerchant3(20, [
  4,
  5,
  5,
  5,
  6,
  6,
  4,
  1,
  4,
  4,
  3,
  6,
  6,
  3,
  6,
  1,
  4,
  5,
  5,
  5
]);

/* Solution 4 */

sockMerchant4 = (n, arr) => {
  let pairs = 0;
  const matches = {};
  for (const sock of arr) {
    if (matches[sock]) {
      total++;
    }
    matches[sock] = !matches[sock];
  }
  return pairs;
};

const pair4 = sockMerchant4(20, [
  4,
  5,
  5,
  5,
  6,
  6,
  4,
  1,
  4,
  4,
  3,
  6,
  6,
  3,
  6,
  1,
  4,
  5,
  5,
  5
]);
console.log("pair4", pair4);
