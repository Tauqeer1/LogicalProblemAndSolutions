// https://leetcode.com/problems/build-array-from-permutation/

// My Solution
let buildArray = (nums) => {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
};

// let result = buildArray([0, 2, 1, 5, 3, 4]);
// let result = buildArray([5, 0, 1, 2, 3, 4]);
// console.log('result', result);

// Other's solution
// solution 1
var buildArray1 = function (nums) {
  return nums.map((value, ind) => {
    return nums[nums[ind]];
  });
};

// solution 2
var buildArray2 = function (nums) {
  return nums.map((v) => nums[v]);
};

// let result = buildArray2([5, 0, 1, 2, 3, 4]);
// console.log(result);

// solution 3
var buildArray3 = function (nums) {
  const result = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    result[i] = nums[nums[i]];
  }
  return result;
};
