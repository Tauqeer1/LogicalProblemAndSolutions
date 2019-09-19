/* 
Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to 
small details like topography. During his last hike he took exactly  steps. For every step he took, 
he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and 
each step up or down represents a  unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level 
and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level 
and ending with a step up to sea level.
Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys 
he walked through.

For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up 
onto a mountain  units high. Finally, he returns to sea level and ends his hike.

// Problem URL
https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup&isFullScreen=true

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
