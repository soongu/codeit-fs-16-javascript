// ~/js-study/week.js
const dailyLikes = (day) => {
  let sum = 0;

  for (let post = 1; post <= 3; post++) {
    sum += day * 12 + post * 5;
  }

  return sum;
};

const weekLikes = () => {
  const list = [];

  for (let day = 1; day <= 7; day++) {
    list.push(dailyLikes(day));
  }

  return list;
};

const week = weekLikes();

console.log(week);
console.log(week.length + '일치를 한 번에 받았어요');
