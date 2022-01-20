// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

let arr = [1, 2, 3, 4, 5];

let leftRotation = (a, d) => {
  for (let i = 0; i < d; i++) {
    a.push(a.shift());
  }
  return a;
};

console.log('final array after rotation', leftRotation(arr, 1));
