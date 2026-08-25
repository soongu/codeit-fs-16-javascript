// ~/js-study/break-nested.js

for (let day = 1; day <= 3; day++) {
  for (let post = 1; post <= 3; post++) {
    if (post === 2) {
      break;
    }
    console.log(day + '일차 ' + post + '번 게시물');
  } 
}
console.log('전부 끝났어요');
