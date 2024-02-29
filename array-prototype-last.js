Array.prototype.last = function () {
  // this refers to the array which is calling
  for (let i = 0; i <= this.length; i++) {
    if (i === this.length - 1) {
      return this[i];
    }
  }
  return -1;
  //   return this[this.length - 1] === undefined ? -1 : this[this.length - 1];
};

const numbers = [];
console.log(numbers.last());
