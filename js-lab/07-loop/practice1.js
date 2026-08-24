// ~/js-lab/practice1.js
let total = 0;

for (let day = 1; day <= 4; day++) {
  let daily = 0;

  for (let post = 1; post <= 3; post++) {
    daily++;
    total++;
  }

  console.log(day + '일차 ' + daily + '개 (누계 ' + total + '개)');
}
