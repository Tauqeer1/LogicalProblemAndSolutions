// Check the number is palindrome or not without using string methods
// Problem url
// https://leetcode.com/problems/palindrome-number/

const isPalindrome = (x) => {
  let lastDigit = 0,
    reverse = 0,
    num = x;
  while (x > 0) {
    // Step 1: Take last digit from the number using modulus (remainder)
    lastDigit = x % 10;
    // Step 2: append last digit to reverse variable
    // (here multiply by 10 is doing to change the number position from one's to ten's and ten's to hundred's and so on)
    reverse = reverse * 10 + lastDigit;
    // Step 3: Remove last digit from the number and get the new number
    x = Math.trunc(x / 10);
  }
  return num === reverse ? true : false;
};

const result = isPalindrome(2112);
console.log('result', result);
