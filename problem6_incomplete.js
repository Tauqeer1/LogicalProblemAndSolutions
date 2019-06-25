plusMinus = arr => {
  let arrLength = arr.length;
  let count = {
    positiveCount: 0,
    negativeCount: 0,
    zeroCount: 0
  };
  let fraction = {
    positiveFraction: 0,
    negativeFraction: 0,
    zeroFraction: 0
  };
  arr.map(elem =>
    elem > 0
      ? count.positiveCount++
      : elem < 0
      ? count.negativeCount++
      : count.zeroCount++
  );

  fraction.positiveFraction = parseFloat(
    count.positiveCount / arrLength,
    10
  ).toFixed(6);
  fraction.negativeFraction = (count.negativeCount / arrLength).toFixed(6);
  fraction.zeroFraction = (count.zeroCount / arrLength).toFixed(6);
  return fraction;
};

let res = plusMinus([-4, 3, -9, 0, 4, 1]);
console.log("res", res);
