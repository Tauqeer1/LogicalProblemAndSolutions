// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

var finalValueAfterOperations = function (operations) {
  let X = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'X++' || operations[i] === '++X') {
      X = X + 1;
    } else {
      X = X - 1;
    }
  }

  return X;
};

// let operations = ['--X', 'X++', 'X++'];
// let operations = ['++X', '++X', 'X++'];
let operations = ['X++', '++X', '--X', 'X--'];
let res = finalValueAfterOperations(operations);
console.log('res', res);

// Other's solutions
// solution 1
var finalValueAfterOperations1 = function (operations) {
  let x = 0;
  for (const operation of operations) {
    operation.includes('+') ? x++ : x--;
  }
  return x;
};

// solution 2
const finalValueAfterOperations2 = (operations) =>
  operations.reduce((acc, curr) => (curr[1] === '+' ? ++acc : --acc), 0);
