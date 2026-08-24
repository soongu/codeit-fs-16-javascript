// ~/js-lab/practice3.js
let bestDay = 0;
let bestLikes = 0;

for (let day = 1; day <= 7; day++) {
  let dailyLikes = 0;

  for (let post = 1; post <= 3; post++) {
    dailyLikes += day * 12 + post * 5;
  }

  if (dailyLikes >= bestLikes) {
    bestLikes = dailyLikes;
    bestDay = day;
  }
}

console.log(
  '가장 좋아요가 많았던 날: ' + bestDay + '일차 (' + bestLikes + '개)',
);
