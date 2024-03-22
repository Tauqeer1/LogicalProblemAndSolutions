// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/

// This solution is working but on leetcode submission it has time limit exceed problem
var maxWidthOfVerticalArea = function (points) {
  let temp = 0;
  let maxWidth = 0;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (points[i][0] > points[j][0]) {
        temp = points[i];
        points[i] = points[j];
        points[j] = temp;
      }
    }
  }

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] - points[i - 1][0] > maxWidth) {
      maxWidth = points[i][0] - points[i - 1][0];
    }
  }

  return maxWidth;
};

// let points = [
//   [8, 7],
//   [9, 9],
//   [7, 4],
//   [9, 7],
// ];
// let points = [
//   [3, 1],
//   [9, 0],
//   [1, 0],
//   [1, 4],
//   [5, 3],
//   [8, 8],
// ];

let result = maxWidthOfVerticalArea(points);
// console.log('result', result);

// Other' solutions
Solution1;
var maxWidthOfVerticalArea1 = function (points) {
  points.sort((a, b) => a[0] - b[0]);
  let widestVerticalArea = 0;
  for (let i = 1; i < points.length; i++)
    widestVerticalArea = Math.max(
      widestVerticalArea,
      points[i][0] - points[i - 1][0]
    );
  return widestVerticalArea;
};
