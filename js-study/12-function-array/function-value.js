// ~/js-study/function-value.js
const dailyLikes = (day) => {
  let sum = 0;

  for (let post = 1; post <= 3; post++) {
    sum += day * 12 + post * 5;
  }

  return sum;
};

console.log(dailyLikes(1));
console.log(dailyLikes)

const calc = dailyLikes;
console.log(typeof calc);
console.log(calc(1));

