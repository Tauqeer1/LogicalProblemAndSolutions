// https://leetcode.com/problems/number-of-good-pairs/description/

var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        count += 1;
      }
    }
  }
  return count;
};

// let array = [1, 2, 3, 1, 1, 3];
// let array = [1, 1, 1, 1];
// let array = [1, 2, 3];
// let res = numIdenticalPairs(array);
// console.log('res', res);

// Other's solution
// Solution 1
function numIdenticalPairs1(nums) {
  let goodPair = 0;
  let map = {};
  for (let num of nums) {
    if (map[num]) {
      goodPair += map[num];
      map[num]++;
    } else {
      map[num] = 1;
    }
  }
  return goodPair;
}

let array = [1, 2, 3, 1, 1, 3];
let res = numIdenticalPairs1(array);
console.log('res', res);
