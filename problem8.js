/* 
  Given Problem

  Consider a staircase of size : n = 4

     #
    ##
   ###
  ####
  Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

  Write a program that prints a staircase of size . 
  Problem URL
  https://www.hackerrank.com/challenges/staircase/problem

*/

/* My Solution */
let stairCase = n => {
  for (let i = 0; i < n; i++) {
    for (j = 1; j <= n; j++) {
      if (j < n - i) {
        process.stdout.write("2");
      } else {
        process.stdout.write("#");
      }
    }
    process.stdout.write("\n");
  }
};
stairCase(10);

process.stdout.write("\n");

/* Another Solution */
let stairCase1 = n => {
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) process.stdout.write("2");
    for (let j = i - 1; j < n; j++) process.stdout.write("#");
    process.stdout.write("\n");
  }
};

stairCase1(10);
