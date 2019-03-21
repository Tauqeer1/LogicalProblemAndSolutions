/*
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet , and the rating for Bob's challenge to be the triplet .

Your task is to find their comparison points by comparing  with ,  with , and  with .

If , then Alice is awarded  point.
If , then Bob is awarded  point.
If , then neither person receives a point.
Comparison points is the total points a person earned.

Given  and , determine their respective comparison points.

For example,  and . For elements , Bob is awarded a point because . For the equal elements  and , no points are earned. Finally, for elements ,  so Alice receives a point. Your return array would be  with Alice's score first and Bob's second.

Function Description

Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.

compareTriplets has the following parameter(s):

a: an array of integers representing Alice's challenge rating
b: an array of integers representing Bob's challenge rating
Input Format

The first line contains  space-separated integers, , , and , describing the respective values in triplet . 
The second line contains  space-separated integers, , , and , describing the respective values in triplet .

Constraints

Output Format

Return an array of two integers denoting the respective comparison points earned by Alice and Bob.

Sample Input 0

5 6 7
3 6 10
Sample Output 0

1 1
Explanation 0

In this example:

Now, let's compare each individual score:

, so Alice receives  point.
, so nobody receives a point.
, so Bob receives  point.
Alice's comparison score is , and Bob's comparison score is . Thus, we return the array .

Sample Input 1

17 28 30
99 16 8
Sample Output 1

2 1
Explanation 1

Comparing the  elements,  so Bob receives a point. 
Comparing the  and  elements,  and  so Alice receives two points. 
The return array is .

 */

// * solution 1
compareTriplets = (a, b) => {
  let alice = 0;
  let bob = 0;

  for (let i in a) {
    a[i] > b[i] ? (alice += 1) : a[i] < b[i] ? (bob += 1) : "neither get pt";
  }
  return [alice, bob];
};

// let res = compareTriplets([17, 28, 30], [99, 16, 8]);
// console.log("res", res);

// * solution 2
compareTriplets = (a, b) => {
  let alice =
    (a[0] > b[0] ? 1 : 0) + (a[1] > b[1] ? 1 : 0) + (a[2] > b[2] ? 1 : 0);
  let bob =
    (a[0] < b[0] ? 1 : 0) + (a[1] < b[1] ? 1 : 0) + (a[2] < b[2] ? 1 : 0);
  return [alice, bob];
};
let res1 = compareTriplets([17, 28, 30], [99, 16, 8]);
// console.log("res", res1);

// * solution 3
compareTriplets = (a, b) => {
  let alice = 0;
  let bob = 0;
  for (let i in a) {
    alice += a[i] > b[i] ? 1 : 0;
    bob += a[i] < b[i] ? 1 : 0;
  }
  return [alice, bob];
};
let res3 = compareTriplets([17, 28, 30], [99, 16, 8]);
console.log("res", res3);
