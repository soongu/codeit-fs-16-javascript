// ~/js-lab/practice2.js
for (let day = 1; day <= 3; day++) {
  for (let post = 1; post <= 5; post++) {
    let likes = day * 20 + post * 15;

    if (likes >= 100) {
      console.log(
        day + '일차 ' + post + '번에서 100개를 넘었어요 (' + likes + '개)',
      );
      break;
    }
  }
}
