/* 
// Problem URL
  https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

*/

/* My Solution */
let jumpingOnClouds = arr => {
  let pathCount = 0;
  let currentIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === currentIndex) {
      let nextIndex1 = currentIndex + 1;
      let nextIndex2 = currentIndex + 2;
      if (
        (arr[nextIndex1] === 0 && arr[nextIndex2] === 0) ||
        arr[nextIndex2] === 0
      ) {
        currentIndex = nextIndex2;
        pathCount += 1;
      } else if (arr[nextIndex1] === 0) {
        currentIndex = nextIndex1;
        pathCount += 1;
      }
    }
  }
  return pathCount;
};

let arr = [0, 1, 0, 0, 0, 1, 0];
let pathCount = jumpingOnClouds(arr);
console.log("pathCount", pathCount);

// Others solutions

// Solution1
let jumpingOnClouds1 = arr => {
  let ind = 0;
  let count = 0;
  while (ind < arr.length - 1) {
    if (arr[ind] === 0) {
      ind += 2;
    } else if (arr[ind] === 1) {
      ind += 1;
    }
    count += 1;
    // console.log(count, head);
  }
  return count;
};

let pathCount1 = jumpingOnClouds1(arr);
console.log("pathCount1", pathCount1);

// Solution 2
let jumpingOnClouds2 = arr => {
  let counter = 0;
  for (let i = 1; i < arr.length; ) {
    if (arr[i + 1] == 0) {
      i += 2;
    } else if (arr[i] == 0) {
      i += 1;
    } else {
      counter = 1;
      break;
    }
    counter += 1;
  }
  return counter;
};

let pathCount2 = jumpingOnClouds2(arr);
console.log("pathCount2", pathCount2);
