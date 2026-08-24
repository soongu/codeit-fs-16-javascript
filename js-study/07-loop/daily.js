// ~/js-study/daily.js
let total = 0;
for (let day = 1; day <= 3; day++) {
  let daily = 0;
  for (let post = 1; post <= 4; post++) {
    daily++;
    total++;
  }
  console.log(day + '일차 게시물 ' + daily
    + '개 (누계 ' + total + '개)');
}
