/* 
    Problem URL
    https://www.hackerrank.com/challenges/time-conversion/problem
*/

/* My solution */
let timeConversion = time12 => {
  let amPm = time12.slice(time12.length - 2, time12.length);
  let arr = time12.slice(0, time12.length - 2).split(":");
  if (amPm === "AM") {
    if (arr[0] === "12") {
      arr[0] = "00";
    }
  } else if (amPm === "PM") {
    if (arr[0] >= 1 && arr[0] <= 11) {
      let num = +arr[0];
      arr[0] = num + 12;
    }
  }
  return arr.join(":");
};

/* Solution 1 */
let timeConversion1 = time => {
  var hh = parseInt(time.substr(0, 2));
  var mmss = time.substr(2, 6);
  var pm = time.substr(8) === "PM";
  var is12 = hh === 12;
  let res = is12 ? (pm ? 12 : 0) : pm ? hh + 12 : hh;
  return (res < 10 ? "0" : "") + res + mmss;
};
let res = timeConversion1("12:45:54PM");
console.log("res", res);
