/* 
// Problem URL
  https://www.hackerrank.com/challenges/grading/problem

*/

/* My Solution */

let nextMultipleOfNumber = (n, multipleNumber) => {
  return n - (n % multipleNumber) + multipleNumber;
};

let gradingStudents = grades => {
  let newGrades = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      newGrades.push(grades[i]);
    } else {
      let nextMultipleOfFive = nextMultipleOfNumber(grades[i], 5);
      let newGrade =
        nextMultipleOfFive - grades[i] < 3 ? nextMultipleOfFive : grades[i];
      newGrades.push(newGrade);
    }
  }
  return newGrades;
};

let arr = [73, 67, 38, 33];
let results = gradingStudents(arr);
console.log("results", results);
