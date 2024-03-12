// https://leetcode.com/problems/find-words-containing-character/

var findWordsContaining = function (words, x) {
  let indexes = [];
  words.forEach((word, index) => {
    if (word.includes(x)) indexes.push(index);
  });
  return indexes;
};

// let words = ['leet', 'code'],
//   x = 'e';
// let words = ['abc', 'bcd', 'aaaa', 'cbc'],
//   x = 'a';
let words = ['abc', 'bcd', 'aaaa', 'cbc'],
  x = 'z';
let result = findWordsContaining(words, x);
console.log('result', result);
