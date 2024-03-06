// https://leetcode.com/problems/concatenation-of-array/

let getConcatenation = (nums) => {
  let newArrayLength = 2 * nums.length;
  let newArray = [];
  for (let i = 0; i < newArrayLength; i++) {
    i < nums.length
      ? newArray.push(nums[i])
      : newArray.push(nums[i - nums.length]);
  }
  return newArray;
};

let nums = [1, 3, 2, 1];
let result = getConcatenation(nums);

console.log('result', result);
