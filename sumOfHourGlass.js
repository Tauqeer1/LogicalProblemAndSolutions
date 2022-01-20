// https://www.hackerrank.com/challenges/2d-array/problem

// let arr = [
//   [-9, -9, -9, 1, 1, 1],
//   [0, -9, 0, 4, 3, 2],
//   [-9, -9, -9, 1, 2, 3],
//   [0, 0, 8, 6, 6, 0],
//   [0, 0, 0, -2, 0, 0],
//   [0, 0, 1, 2, 4, 0],
// ];

let arr = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
];

let sum = 0,
  maxSum;

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    sum =
      arr[i][j] +
      arr[i][j + 1] +
      arr[i][j + 2] +
      arr[i + 1][j + 1] +
      arr[i + 2][j] +
      arr[i + 2][j + 1] +
      arr[i + 2][j + 2];
    if (maxSum === undefined) {
      maxSum = sum;
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
}
console.log('maxSum', maxSum);
