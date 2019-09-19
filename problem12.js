/* 
// Problem URL
  https://www.hackerrank.com/challenges/counting-valleys

*/

/* My solution */
let s = ["D", "U", "D", "U"];
let countingValleys = (n, s) => {
  let valley = 0;
  let cL = 0;
  s.map(c => {
    if (c === "U") {
      cL = cL + 1;
    }
    if (c === "D") {
      cL = cL - 1;
    }
    if (cL === 0 && c === "U") {
      valley = valley + 1;
    }
  });
  return valley;
};

let valley = countingValleys(8, s);
// console.log("valley", valley);

// Another Solutions
// Solution 1
let countingValleys1 = s => {
  var c = 0;
  var l = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] == "U") {
      l++;
    } else if (s[i] == "D") {
      l--;
      if (l == -1) {
        c++;
      }
    }
  }
  return c;
};

let valley1 = countingValleys1(s);
// console.log("valley1", valley1);

// Solution 2

let countingValleys2 = s => {
  let currentLevel = 0;
  let valleyCount = 0;
  let prevLevel = 0;

  for (var i = 0; i < s.length; i++) {
    prevLevel = currentLevel;
    if (s[i] == "U") {
      currentLevel++;
    } else if (s[i] == "D") {
      currentLevel--;
    }

    if (prevLevel < 0 && currentLevel === 0) {
      valleyCount++;
    }
  }
  return valleyCount;
};

let valley2 = countingValleys2(s);
console.log("valley2", valley2);

// Solution 3

let countingValleys3 = s => {
  let currentLevel = 0;
  let valleyCount = 0;

  for (var i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "U":
        currentLevel++;
        break;
      case "D":
        if (currentLevel === 0) {
          valleyCount++;
        }
        currentLevel--;
        break;
    }
  }
  return valleyCount;
};

let valley3 = countingValleys3(s);
console.log("valley3", valley3);
