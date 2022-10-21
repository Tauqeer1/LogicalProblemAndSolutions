// 13. Roman to Integer
// Problem url
// https://leetcode.com/problems/roman-to-integer/

let romanToInt = (s) => {
  let intNumber = 0;
  let symbolArray = [
    { key: 'I', value: 1 },
    { key: 'V', value: 5 },
    { key: 'X', value: 10 },
    { key: 'L', value: 50 },
    { key: 'C', value: 100 },
    { key: 'D', value: 500 },
    { key: 'M', value: 1000 },
  ];
  for (let i = s.length - 1; i >= 0; i--) {
    let value = symbolArray.find((obj) => obj.key === s[i]).value;
    if (i > 0) {
      let nextValue = symbolArray.find((obj) => obj.key === s[i - 1])?.value;
      if (value <= nextValue) {
        intNumber += value;
      } else if (value > nextValue) {
        intNumber += value - nextValue - nextValue;
      }
    } else {
      intNumber += value;
    }
  }
  return intNumber;
};

// let result = romanToInt('IV'); //4
// let result = romanToInt('IX'); // 9
// let result = romanToInt('XL'); // 40
// let result = romanToInt('XC'); // 90
// let result = romanToInt('CD'); // 400
// let result = romanToInt('CM'); // 900
// let result = romanToInt('III'); // 3
// let result = romanToInt('LVIII'); // 58
let result = romanToInt('MCMXCIV'); // 1994
console.log('result', result);
